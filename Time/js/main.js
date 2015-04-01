/*global define,document */
/*jslint sloppy:true,nomen:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(["dojo/_base/declare", "dojo/_base/lang", "dojo/query", "dojo/on", "dojo/string", "dojo/date/locale", "dojo/dom-construct", "dojo/_base/array", "esri/arcgis/utils", "esri/TimeExtent", "esri/dijit/TimeSlider", "dojo/dom", "dojo/dom-class", "dojo/on", "dojo/domReady!"], function (
  declare,
  lang,
  query,
  on,
  string,
  locale,
  domConstruct,
  array,
  arcgisUtils,
  TimeExtent,
  TimeSlider,
  dom,
  domClass,
  on
) {
  return declare(null, {
    config: {},
    startup: function (config) {
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;
        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;
        this._createWebMap(itemInfo);
      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
      }
    },
    reportError: function (error) {
      // remove loading class from body
      domClass.remove(document.body, "app-loading");
      domClass.add(document.body, "app-error");
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        if (this.config && this.config.i18n) {
          node.innerHTML = this.config.i18n.map.error + ": " + error.message;
        } else {
          node.innerHTML = "Unable to create map: " + error.message;
        }
      }
    },
    _createWidgets: function(){
      //Specify the title and subtitle
      document.title = this.config.response.itemInfo.item.title;
      if(this.config.title){
        domClass.add(document.body, "showtitle");
        if(this.config.title){
         var title = this.config.titletext || this.config.response.itemInfo.item.title;
         dom.byId("title").innerHTML = title;
         var subtitle = this.config.subtitletext || this.config.response.itemInfo.item.snippet;
         dom.byId("subtitle").innerHTML = subtitle
         if(subtitle === null){
          domClass.add(document.body, "nosubtitle");
         }
        }
      }else{
        domClass.add(dom.byId("titleContainer"), "hide");
      }

      //add scale bar if specified 
      if(this.config.scale){
        require(["esri/dijit/Scalebar"], lang.hitch(this, function(Scalebar){
           var scalebar = new Scalebar({
            map: this.map,
            scalebarUnit: this.config.units
           });
        }));
      }else{
        domClass.add(document.body, "noscale");
      }
      //add legend
      if(this.config.legend){
        require(["esri/dijit/Legend"], lang.hitch(this, function(Legend){
          dom.byId("legendHeader").innerHTML = this.config.i18n.legend.title;
          on(dom.byId("legendHeader"),"click",lang.hitch(this, function(){
            if(domClass.contains("legendDiv", "hide")){
              domClass.remove("legendDiv", "hide");
              domClass.remove("legendHeader", "icon-open");
              domClass.add("legendDiv", "show");
              domClass.add("legendHeader", "icon-close");
            }else{
              domClass.remove("legendHeader", "icon-close");
              domClass.remove("legendDiv","show");
              domClass.add("legendDiv", "hide");
              domClass.add("legendHeader", "icon-open");
            }
          }));

          var legendLayers = arcgisUtils.getLegendLayers(this.config.response);
          if(legendLayers.length < 1){
            domClass.add("legendContainer", "hide");
            return;
          }
          var legend = new Legend({
            map: this.map,
            layerInfos: legendLayers
          }, domConstruct.create("div",{},"legendDiv"));

          legend.startup();
          domClass.add("legendContainer", "window-" + this.config.legendposition);
        }));
      }else{
        domClass.add("legendContainer", "hide");
      }

      //Add the search widget
      require(["esri/dijit/Search", "esri/tasks/locator"], lang.hitch(this, function (Search, Locator) {
          if (!Search && !Locator) {
              return;
          }

          var options = {
              map: this.map,
              enableButtonMode: true,
              expanded:false,
              addLayersFromMap: false
          };
          var searchLayers = false;
          var search = new Search(options, domConstruct.create("div", {
              id: "search"
          }, "mapDiv"));
          var defaultSources = [];

          //setup geocoders defined in common config 
          if (this.config.helperServices.geocode && this.config.locationSearch) {
              var geocoders = lang.clone(this.config.helperServices.geocode);
              array.forEach(geocoders, lang.hitch(this, function (geocoder) {
                  if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {

                      geocoder.hasEsri = true;
                      geocoder.locator = new Locator(geocoder.url);

                      geocoder.singleLineFieldName = "SingleLine";

                      geocoder.name = geocoder.name || "Esri World Geocoder";

                      if (this.config.searchExtent) {
                          geocoder.searchExtent = this.map.extent;
                          geocoder.localSearchOptions = {
                              minScale: 300000,
                              distance: 50000
                          };
                      }
                      defaultSources.push(geocoder);
                  } else if (esriLang.isDefined(geocoder.singleLineFieldName)) {

                      //Add geocoders with a singleLineFieldName defined 
                      geocoder.locator = new Locator(geocoder.url);

                      defaultSources.push(geocoder);
                  }
              }));
          }
          //add configured search layers to the search widget 
          var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);

          array.forEach(configuredSearchLayers, lang.hitch(this, function (layer) {

              var mapLayer = this.map.getLayer(layer.id);
              if (mapLayer) {
                  var source = {};
                  source.featureLayer = mapLayer;

                  if (layer.fields && layer.fields.length && layer.fields.length > 0) {
                      source.searchFields = layer.fields;
                      source.displayField = layer.fields[0];
                      source.outFields = ["*"];
                      searchLayers = true;
                      defaultSources.push(source);
                      if (mapLayer.infoTemplate) {
                          source.infoTemplate = mapLayer.infoTemplate;
                      }
                  }
              }
          }));
          //Add search layers defined on the web map item 
          if (this.config.response.itemInfo.itemData && this.config.response.itemInfo.itemData.applicationProperties && this.config.response.itemInfo.itemData.applicationProperties.viewing && this.config.response.itemInfo.itemData.applicationProperties.viewing.search) {
              var searchOptions = this.config.response.itemInfo.itemData.applicationProperties.viewing.search;
          
              array.forEach(searchOptions.layers, lang.hitch(this, function (searchLayer) {
                  //we do this so we can get the title specified in the item
                  var operationalLayers = this.config.itemInfo.itemData.operationalLayers;
                  var layer = null;
                  array.some(operationalLayers, function (opLayer) {
                      if (opLayer.id === searchLayer.id) {
                          layer = opLayer;
                          return true;
                      }
                  });

                  if (layer && layer.hasOwnProperty("url")) {
                      var source = {};
                      var url = layer.url;
                      var name = layer.title || layer.name;

                      if (esriLang.isDefined(searchLayer.subLayer)) {
                          url = url + "/" + searchLayer.subLayer;
                          array.some(layer.layerObject.layerInfos, function (info) {
                              if (info.id == searchLayer.subLayer) {
                                  name += " - " + layer.layerObject.layerInfos[searchLayer.subLayer].name;
                                  return true;
                              }
                          });
                      }

                      source.featureLayer = new FeatureLayer(url);


                      source.name = name;


                      source.exactMatch = searchLayer.field.exactMatch;
                      source.displayField = searchLayer.field.name;
                      source.searchFields = [searchLayer.field.name];
                      source.placeholder = searchOptions.hintText;
                      defaultSources.push(source);
                      searchLayers = true;
                  }

              }));
          }

          search.set("sources", defaultSources);

          search.startup();
          
          //set the first non esri layer as active if search layers are defined. 
          var activeIndex = 0;
          if (searchLayers) {
              array.some(defaultSources, function (s, index) {
                  if (!s.hasEsri) {
                      activeIndex = index;
                      return true;
                  }
              });


              if (activeIndex > 0) {
                  search.set("activeSourceIndex", activeIndex);
              }
          }

      }));

    },
    _updateTheme: function(){
      if(this.config.panelbackground){
       query(".bg").style("backgroundColor", this.config.panelbackground.toString());
      }
      if(this.config.panelcolor){
        query(".fg").style("color", this.config.panelcolor.toString());
        query(".fg").style("borderColor", this.config.panelcolor.toString());
      }
      if(this.config.timecolor){
        query(".tc").style("color", this.config.timecolor);
        query(".dijitSliderImageHandleH").style("backgroundColor", this.config.timecolor);
        query(".dijitSliderImageHandleH").style("borderColor", this.config.timecolor);
      }

    },
    _displayTime: function () {
      //position the time window 
      domClass.add("timeContainer", "window-" + this.config.timeposition);

      //Add the time slider the map is time aware or there are time aware layers
      var timeProperties = null, timeExtent = null;

      if(this.config.response.itemInfo.itemData.widgets && this.config.response.itemInfo.itemData.widgets.timeSlider){
        timeProperties = this.config.response.itemInfo.itemData.widgets.timeSlider.properties;
        timeExtent =  new TimeExtent(new Date(timeProperties.startTime),new Date(timeProperties.endTime));
        this.map.setTimeExtent(timeExtent);
      }
 
      if(timeProperties && timeExtent){
   
        //Add the time slider widget
        var timeSlider = new TimeSlider({
          loop: this.config.looptime
        },"timeSliderDiv");

        this.map.setTimeSlider(timeSlider);
        
        if(timeProperties.numberOfStops){
          timeSlider.createTimeStopsByCount(timeExtent,timeProperties.numberOfStops);
        }else{
         timeSlider.createTimeStopsByTimeInterval(timeExtent, timeProperties.timeStopInterval.interval, timeProperties.timeStopInterval.units);
        }
      
        timeSlider.setThumbCount(timeProperties.thumbCount);
        timeSlider.setThumbMovingRate(timeProperties.thumbMovingRate);

        timeSlider.startup();


        if(!this.config.sliderticks){
         domClass.add(timeSlider.domNode, "noTicks");
        }

        //autoplay the timer 
        if(this.config.autoplay){
          timeSlider.play();
        }
        if(this.config.nocontrols){
          //hide the play and slider controls
          domClass.add(dom.byId("timeControls"), "noControls");
          domClass.add(dom.byId("timeLabel"), "noControls");
        }
        //Listen for time extent changes
        this._formatLabel(this.map.timeExtent);//timeSlider.getCurrentTimeExtent());
        on(timeSlider, "time-extent-change", lang.hitch(this, function(e){
         this._formatLabel(e);
        }));
        on(dom.byId("playSlider"), "click", lang.hitch(this, function(){
          var play = domClass.contains("playSlider", "icon-play");
          var removeClass = null, addClass= null;
          if(play){//Switch to the pause icon and press play
            removeClass="icon-play";
            addClass = "icon-pause";
            timeSlider.play();
          }else{//Switch to the play icon and press pause
            removeClass = "icon-pause";
            addClass = "icon-play";
            timeSlider.pause();
          }

          domClass.remove("playSlider", removeClass);
          domClass.add("playSlider", addClass);

        }));
      }else{
        //hide play and slider controls and add message about no 
        //time 
        domClass.add(dom.byId("timeControls"), "noControls");
        domClass.add(dom.byId("timeLabel"), "noControls");
        domClass.add(dom.byId("timeLabel"), "error");
        dom.byId("timeLabel").innerHTML = this.config.i18n.time.enableTimeMessage;

      }
      this._updateTheme();
    },
    _formatLabel: function(timeExtent){
        //Format the date/time labels
        var startDatePattern = null;
        var endDatePattern = null;
        var startTimePattern = null;
        var endTimePattern = null;


        var start = timeExtent.startTime, end = timeExtent.endTime;

       if(this.config.datetimeformat){
         startDatePattern = this.config.datetimeformat;
         endDatePattern = this.config.datetimeformat;
       }else{
        //calculate an appropriate start and end time pattern

        if(end.toUTCString() === start.toUTCString()){
          end = null; //strings match so set end to null
        }
        if(end && start.getFullYear() == end.getFullYear()){
          if (start.getMonth() == end.getMonth()) {
            if (start.getDate() == end.getDate()) {
              if (start.getHours() == end.getHours()) {
                if (start.getMinutes() == end.getMinutes()) {
                  if (start.getSeconds() == end.getSeconds()) {
                    // same second
                    //end = null; //don't show same second
                    startDatePattern = this.config.i18n.time.datePattern;
                    startTimePattern = this.config.i18n.time.millisecondTimePattern;
                    endTimePattern = this.config.i18n.time.millisecondTimePattern;
                  } else { // same minute
                    startDatePattern = this.config.i18n.time.datePattern;
                    startTimePattern = this.config.i18n.time.secondTimePattern;
                    endTimePattern = this.config.i18n.time.secondTimePattern;
                  }
                } else { // same hour
                  startDatePattern = this.config.i18n.time.datePattern;
                  startTimePattern = this.config.i18n.time.minuteTimePattern;
                  endTimePattern = this.config.i18n.time.minuteTimePattern;
                }
              } else { // same day
                startDatePattern = this.config.i18n.time.datePattern;
                startTimePattern = this.config.i18n.time.hourTimePattern;
                endTimePattern = this.config.i18n.time.hourTimePattern;
              }
            } else { // same month
              if (end.getDate() - start.getDate() < 2) {
                // less than 2 days
                startDatePattern = this.config.i18n.time.datePattern;
                startTimePattern = this.config.i18n.time.hourTimePattern;
                endDatePattern = this.config.i18n.time.datePattern;
                endTimePattern = this.config.i18n.time.hourTimePattern;
              } else {
                startDatePattern = this.config.i18n.time.datePattern;
                endDatePattern = this.config.i18n.time.datePattern;
              }
            }
          } else { // same year
            startDatePattern = this.config.i18n.time.datePattern;
            endDatePattern = this.config.i18n.time.datePattern;
          }
        }else if (end && end.getFullYear() - start.getFullYear() > 2){
          startDatePattern = this.config.i18n.time.yearPattern;
          endDatePattern = this.config.i18n.time.yearPattern;
        }else{
          startDatePattern = this.config.i18n.time.datePattern;
          endDatePattern = this.config.i18n.time.datePattern;
        }
            
       }

        var startTime = locale.format(start, {
          datePattern: startDatePattern,
          timePattern: startTimePattern,
          selector: (startDatePattern && startTimePattern) ? null : (startDatePattern ? "date" : "time")
        });
        var endTime = null;
        if (end) {
          endTime = locale.format(end, {
            datePattern: endDatePattern,
            timePattern: endTimePattern,
            selector: (endDatePattern && endTimePattern) ? null : (endDatePattern ? "date" : "time")
          });
        }
       var info;
       if(end){
        info = string.substitute(this.config.i18n.time.timeRange,{
          startTime: startTime,
          endTime: endTime
        });
       }else{
        info = "" + startTime;
       }
      dom.byId("timeLabel").innerHTML =  info;
    },
    // create a map based on the input web map id
    _createWebMap: function (itemInfo) {
      var options = {};
      options.slider = this.config.zoomslider;
      if(this.config.zoomslider === false){
        domClass.add(document.body, "nozoom");
      }
      //specify center and zoom if provided as url params 
      if (this.config.level) {
          options.zoom = this.config.level;
      }
      if (this.config.center) {
          var points = this.config.center.split(",");
          if (points && points.length === 2) {
              options.center = [parseFloat(points[0]), parseFloat(points[1])];
          }
      }
      arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: options,
        usePopupManager: true,
        editable: this.config.editable,
        bingMapsKey: this.config.bingKey
      }).then(lang.hitch(this, function (response) {
        // Once the map is created we get access to the response which provides important info
        // such as the map, operational layers, popup info and more. This object will also contain
        // any custom options you defined for the template. In this example that is the 'theme' property.
        // Here' we'll use it to update the application to match the specified color theme.
        // console.log(this.config);
        this.map = response.map;
        this.config.response = response;
        // remove loading class from body
        domClass.remove(document.body, "app-loading");
        this._createWidgets();
        if(this.config.time){
          this._displayTime();
        }else{
          domClass.add(dom.byId("timeContainer"), "hide");
        }


        // map has been created. You can start using it.
        // If you need map to be loaded, listen for it's load event.
      }), this.reportError);
    }
  });
});
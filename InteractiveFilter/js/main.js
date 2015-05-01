define(["dojo/ready", "dojo/_base/declare", "dojo/dom", "dojo/_base/Color", "dojo/query", "dojo/_base/lang", "dojo/_base/array", "dojo/dom-construct", "dijit/registry", "dojo/has", "dojo/sniff", "esri/arcgis/utils", "esri/lang", "dojo/on", "application/Drawer", "application/Filter", "dojo/dom-class", "esri/tasks/query", "esri/tasks/QueryTask", "esri/layers/FeatureLayer", "esri/dijit/LocateButton", "esri/dijit/HomeButton"], function (
ready, declare, dom, Color, query, lang, array, domConstruct, registry, has, sniff, arcgisUtils, esriLang, on, Drawer, Filter, domClass, esriQuery, QueryTask, FeatureLayer, LocateButton, HomeButton) {
    return declare("", null, {
        config: {},
        theme: null,
        color: null,
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                // responsive drawer
                this._drawer = new Drawer({
                    showDrawerSize: 850,
                    // Pixel size when the drawer is automatically opened
                    borderContainer: "border_container",
                    // border container node id
                    contentPaneCenter: "cp_center",
                    // center content pane node id
                    contentPaneSide: "cp_left",
                    // side content pane id
                    toggleButton: "toggle_button",
                    // button node to toggle drawer id
                    direction: this.config.i18n.direction // i18n direction "ltr" or "rtl"
                });
                // startup drawer
                this._drawer.startup();

                // document ready
                ready(lang.hitch(this, function () {

                    this.theme = this.setColor(this.config.theme);
                    this.color = this.setColor(this.config.color);

                    //supply either the webmap id or, if available, the item info
                    var itemInfo = this.config.itemInfo || this.config.webmap;

                    this._createWebMap(itemInfo);
                }));
            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }

        },
        _mapLoaded: function () {

            //add the loading icon
            domConstruct.create("img", {
                id: "loader",
                src: "images/loading.gif",
                className: "loader"
            }, "mapDiv");
            var filter = new Filter({
                map: this.map,
                layers: this.config.response.itemInfo.itemData.operationalLayers,
                filterDropdown: this.config.filterDropdown,
                button_text: this.config.button_text,
                webmap: this.config.response,
                displayClear: this.config.displayClear || false,
                displayZoom: this.config.displayZoom || false,
                filterOnLoad: this.config.filterOnLoad || false,
                filterInstructions: this.config.filterInstructions || null
            });
            filter.createFilterContent().then(lang.hitch(this, function (content) {
                registry.byId("cp_left").set("content", content);
                this._updateTheme();
            }));

            //Add the geocoder if search is enabled
            if (this.config.search) {
                //Add the location search widget
                require(["esri/dijit/Search", "esri/tasks/locator"], lang.hitch(this, function (Search, Locator) {
                    if (!Search && !Locator) {
                        return;
                    }

                    var options = {
                        map: this.map,
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



                    if (search && search.domNode) {
                        domConstruct.place(search.domNode, "search");
                    }

                }));
            }

            //Add the location button if enabled
            if (this.config.locate) {
                var location = new LocateButton({
                    map: this.map
                }, domConstruct.create("div", {
                    id: "locateDiv"
                }, "mapDiv"));
                location.startup();
            }

            //Add the home button if configured
            if (this.config.home) {
                var homeButton = new HomeButton({
                    map: this.map
                }, domConstruct.create("div", {
                    id: "homeDiv"
                }, "mapDiv"));
                homeButton.startup();
            }

            domClass.remove(dom.byId("loader"), "startLoader");
            this._updateTheme();
        },

        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {
                    //Optionally define additional map config here for example you can
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                editable: false,
                usePopupManager: true,
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function (response) {

                this.map = response.map;
                this.config.response = response;
                domClass.add(this.map.infoWindow.domNode, "light");
                //define the application title
                var title = this.config.title || response.itemInfo.item.title;
                dom.byId("title").innerHTML = title;
                document.title = title;


                // make sure map is loaded
                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        // do something with the map
                        this._mapLoaded();
                    }));
                }
            }), lang.hitch(this, function (error) {
                //an error occurred - notify the user. In this example we pull the string from the
                //resource.js file located in the nls folder because we've set the application up
                //for localization. If you don't need to support multiple languages you can hardcode the
                //strings here and comment out the call in index.html to get the localization strings.
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.map.error + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
            }));
        },
        setColor: function (value) {
            var colorValue = null;
            var rgb = Color.fromHex(value).toRgb();
            if (has("ie") == 8) {
                colorValue = value;
            } else {
                rgb.push(0.9);
                colorValue = Color.fromArray(rgb);
            }
            return colorValue;

        },

        _updateTheme: function () {
            //Apply the configured theme to the template
            //Add the bg class to any elements that you want to display using the specified background color
            //Apply the fc class to elements that should display using the specified font color
            query(".bg").style("backgroundColor", this.theme.toString());
            query(".bg").style("color", this.color.toString());
            query(".fc").style("color", this.color.toString());
            //Style the popup title bar to use the theme color.
            query(".esriPopup .pointer").style("backgroundColor", this.theme.toString());
            query(".esriPopup .titlePane").style("backgroundColor", this.theme.toString());
            query(".esriPopup .titlePane").style("color", this.color.toString());
            query(".esriPopup. .titleButton").style("color", this.color.toString());

            registry.byId("border_container").resize();
        }
    });
});
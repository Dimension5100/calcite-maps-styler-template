﻿define(
   ({
    map: {
      error: "å_Unable to create map_ø"
    },
    onlineStatus: {
      offline: "å_You are currently working offline. Form submissions will be saved locally until a connection to the server can be made_ø.",
      reconnecting: "å_Reconnecting&hellip;_ø",
      pending: "å_${total} pending edit(s) will be submitted when a network connection is re-established_ø."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "å_My Organization_ø",
          onlineLabel: "å_ArcGIS Online_ø",
          contentLabel: "å_My Content_ø",
          favoritesLabel: "å_My Favorites_ø"
        },
        title: "å_Select Web Map_ø",
        searchTitle: "å_Search_ø",
        ok: "å_Ok_ø",
        cancel: "å_Cancel_ø",
        placeholder: "å_Enter search term_ø"
      },
      groupdlg: {
        items: {
          organizationLabel: "å_My Organization_ø",
          onlineLabel: "å_ArcGIS Online_ø",
          contentLabel: "å_My Content_ø",
          favoritesLabel: "å_My Favorites_ø"
        },
        title: "å_Select Group_ø",
        searchTitle: "å_Search_ø",
        ok: "å_Ok_ø",
        cancel: "å_Cancel_ø",
        placeholder: "å_Enter search term_ø"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "å_Here is a link to a GeoForm_ø"
      }
    },
    user: {
      mgrs: "å_MGRS_ø",
      usng: "å_USNG_ø",
      utm: "å_UTM_ø",
      utm_northing: "å_Northing_ø",
      utm_easting: "å_Easting_ø",
      utm_zone_number: "å_Zone Number_ø",
      selectLayerTabText: "å_${formSection} Select Form_ø",
      geoFormGeneralTabText: "å_${formSection} Enter Information_ø",
      locationInformationText: "å_${formSection} Select Location_ø",
      submitInformationText: "å_${formSection} Complete Form_ø",
      submitInstructions: "å_Add this information to the map_ø.",
      myLocationText: "å_Current Location_ø",
      locationDescriptionForMoreThanOneOption: "å_Specify the location for this entry by clicking/tapping the map or by using one of the following options_ø.",
      locationDescriptionForOneOption: "å_Specify the location for this entry by clicking/tapping the map or by using the following option_ø.",
      locationDescriptionForNoOption: "å_Specify the location for this entry by clicking/tapping the map_ø.",
      addressText: "å_Search_ø",
      geographic: "å_Lat/Lon_ø",
      locationTabText: "å_Location_ø",
      locationPopupTitle: "å_Location_ø",
      submitButtonText: "å_Submit Entry_ø",
      submitButtonTextLoading: "å_Submitting&hellip;_ø",
      formValidationMessageAlertText: "å_The following fields are required_ø:",
      selectLocation: "å_Please select a location for your submission_ø.",
      emptylatitudeAlertMessage: "å_Please enter a ${openLink}latitude${closeLink} coordinate_ø.",
      emptylongitudeAlertMessage: "å_Please enter a ${openLink}longitude${closeLink} coordinate_ø.",
      shareUserTitleMessage: "å_Thank you for your contribution_ø!",
      entrySubmitted: "å_Your entry has been submitted to the map_ø.",
      shareThisForm: "å_Share This Form_ø",
      shareUserTextMessage: "å_Tell others to contribute using the following options_ø.",
      addAttachmentFailedMessage: "å_Unable to add attachment to layer_ø",
      addFeatureFailedMessage: "å_Unable to add feature to layer_ø",
      noLayerConfiguredMessage: "å_An error occurred loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap_ø.",
      placeholderLatitude: "å_Latitude (Y)_ø",
      placeholderLongitude: "å_Longitude (X)_ø",
      latitude: "å_Latitude_ø",
      longitude: "å_Longitude_ø",
      findMyLocation: "å_Locate Me_ø",
      finding: "å_Locating&hellip;_ø",
      backToTop: "å_Back to top_ø",
      addressSearchText: "å_Your submission will appear here. You can drag the pin to correct the location_ø.",
      shareModalFormText: "å_Form Link_ø",
      close: "å_Close_ø",
      locationNotFound: "å_Location could not be found_ø.",
      setLocation: "å_Set Location_ø",
      find: "å_Find address or place_ø",
      attachment: "å_Attachment_ø",
      toggleDropdown: "å_Toggle Dropdown_ø",
      invalidString: "å_Please enter valid value_ø.",
      invalidSmallNumber: "å_Please enter valid ${openStrong}integer${closeStrong} value between -32768 and 32767_ø.",
      invalidNumber: "å_Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647_ø.",
      invalidFloat: "å_Please enter valid ${openStrong}floating point${closeStrong} value_ø.",
      invalidDouble: "å_Please enter valid ${openStrong}double${closeStrong} value_ø.",
      invalidLatLong: "å_Please enter valid latitude and longitude coordinates_ø.",
      invalidUTM: "å_Please enter valid UTM coordinates_ø.",
      invalidUSNG: "å_Please enter valid USNG coordinates_ø.",
      invalidMGRS: "å_Please enter valid MGRS coordinates_ø.",
      geoformTitleText: "å_GeoForm_ø",
      domainDefaultText: "å_Select&hellip;_ø",
      applyEditsFailedMessage: "å_Sorry your entry cannot be submitted. Please try again_ø.",
      requiredFields: "å_There are some errors. Please correct them below_ø.",
      requiredField: "å_(required)_ø",
      error: "å_Error_ø",
      textRangeHintMessage: "å_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}_ø",
      dateRangeHintMessage: "å_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}_ø",
      remainingCharactersHintMessage: "å_${value} characters remaining_ø",
      mapFullScreen: "å_Full Screen_ø",
      mapRestore: "å_Restore_ø",
      filterSelectEmptyText: "å_Select_ø",
      invalidLayerMessage: "å_Form layer does not exist. Please configure the application and set the layer_ø.",
      selectedLayerText: "å_All_ø",
      fileUploadStatus: "å_File Upload Status_ø",
      uploadingBadge: "å_&nbsp;Uploading&hellip;_ø",
      successBadge: "å_&nbsp;Uploaded_ø",
      retryBadge: "å_Retry_ø",
      errorBadge: "å_Error uploading&nbsp;&nbsp;&nbsp;_ø",
      fileTooLargeError: "å_File too large to attach_ø",
      exceededFileCountError: "å_Exceeded maximum no. of attachments allowed_ø",
      selectFileTitle: "å_Select a file_ø",
      btnViewSubmissions: "å_View Submissions_ø",
      dateFormat: "å_MM/DD/YYYY h:mm a_ø"
    },
    builder: {
      invalidUser: "å_Sorry, you don't have permission to view this item_ø",
      invalidWebmapSelectionAlert: "å_The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue_ø.",
      invalidWebmapSelectionAlert2: "å_For More Information please refer to ${openLink}What is Feature Service?${closeLink}_ø",
      selectFieldsText: "å_Select Form Fields_ø",
      selectThemeText: "å_Select Form Theme_ø",
      webmapText: "å_Webmap_ø",
      layerText: "å_Layer_ø",
      detailsText: "å_Details_ø",
      fieldsText: "å_Fields_ø",
      styleText: "å_Style_ø",
      optionText: "å_Options_ø",
      previewText: "å_Preview_ø",
      publishText: "å_Publish_ø",
      optionsApplicationText: "å_Options_ø",
      titleText: "å_Builder_ø",
      descriptionText: "å_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a mapâ€™s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm_ø.",
      btnPreviousText: "å_Previous_ø",
      btnNextText: "å_Next_ø",
      webmapTabTitleText: "å_Select a Webmap_ø",
      viewWebmap: "å_View webmap_ø",
      webmapDetailsText: "å_The selected webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. To select a different webmap please click on 'Choose Webmap' button_ø",
      btnSelectWebmapText: "å_Choose Webmap_ø",
      btnSelectWebmapTextLoading: "å_Loading&hellip;_ø",
      layerTabTitleText: "å_Select Editable Layer_ø",
      selectLayerLabelText: "å_Layer_ø",
      selectLayerDefaultOptionText: "å_Select Layer_ø",
      defaultBasemap: "å_Basemap Toggle_ø",
      secondaryBasemap: "å_Default Basemap_ø",
      detailsTabTitleText: "å_Form Details_ø",
      detailTitleLabelText: "å_Title_ø",
      detailLogoLabelText: "å_Logo Image_ø",
      descriptionLabelText: "å_Form Instructions & Details_ø",
      fieldDescriptionLabelText: "å_Help Text (optional)_ø",
      fieldTabFieldHeaderText: "å_Field_ø",
      fieldTabLabelHeaderText: "å_Label_ø",
      fieldTabDisplayTypeHeaderText: "å_Display As_ø",
      fieldTabOrderColumnText: "å_Order_ø",
      fieldTabVisibleColumnText: "å_Enabled_ø",
      displayFieldText: "å_Display Field_ø",
      selectMenuOption: "å_Select Menu_ø",
      selectRadioOption: "å_Radio Button_ø",
      selectTextOption: "å_Text_ø",
      selectDateOption: "å_Date Picker_ø",
      selectRangeOption: "å_Touch-Spinner_ø",
      selectCheckboxOption: "å_Checkbox_ø",
      selectMailOption: "å_Email_ø",
      selectUrlOption: "å_URL_ø",
      selectTextAreaOption: "å_Text Area_ø",
      previewApplicationText: "å_Preview Application_ø",
      saveApplicationText: "å_Save Application_ø",
      saveText: "å_Save_ø",
      toggleNavigationText: "å_Toggle navigation_ø",
      formPlaceholderText: "å_My Form_ø",
      shareBuilderInProgressTitleMessage: "å_Publishing GeoForm_ø",
      shareBuilderProgressBarMessage: "å_Please Wait&hellip;_ø",
      shareBuilderTitleMessage: "å_Success! Item saved_ø",
      shareBuilderTextMessage: "å_You can start collecting information by sharing with others_ø",
      shareModalFormText: "å_Form Link_ø",
      shareBuilderSuccess: "å_Your GeoForm has been updated & published_ø!",
      geoformTitleText: "å_Geo Form_ø",
      layerTabText: "å_This is the layer that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience_ø.",
      detailsTabText: "å_Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm_ø.",
      fieldsTabText: "å_Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry_ø.",
      styleTabText: "å_Style your GeoForm using the themes below based on your preference_ø.",
      publishTabText: "å_If you are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback_ø.",
      headerSizeLabel: "å_Header Size_ø",
      smallHeader: "å_Use Small Header_ø",
      bigHeader: "å_Use Large Header_ø",
      pushpinText: "å_Push pin_ø",
      doneButtonText: "å_Save and Exit_ø",
      fieldTabPlaceHolderHeaderText: "å_Hint (optional)_ø",
      enableAttachmentLabelText: "å_${openStrong}Enable Attachments${closeStrong}_ø",
      enableAttachmentLabelHint: "å_You can enable/disable the attachments here_ø",
      attachmentIsRequiredLabelText: "å_${openStrong}Attachment Required${closeStrong}_ø",
      attachmentIsRequiredLabelHint: "å_If necessary, users can be required to enter an attachment_ø.",
      attachmentLabelText: "å_Attachment Button Label_ø",
      attachmentLabelHint: "å_This text will appear next to the Attachment Button. You can use this space to describe what you would like your audience to attach (photo, video, document, etc.), the file format you are asking for (.jpeg, .png, .docx, .pdf, etc.), and any additional instructions_ø",
      attachmentDescription: "å_Attachment Description_ø",
      attachmentHint: "å_If necessary, you can provide additional attachment instructions here_ø.",
      jumbotronDescription: "å_Use large or small heading for your form. A large header may help define the purpose of your application but it takes up more room on your screen_ø",
      shareGeoformText: "å_Share Geoform_ø",
      shareDescription: "å_The sharing panel makes it easy for your audience to share the GeoForm with other collaborators once they have made a submission - this can be disabled at any time_ø.",
      defaultMapExtent: "å_Default Map Extent_ø",
      defaultMapExtentDescription: "å_The map will reset to the default extent in your web map after submission - this can be disabled at any time_ø.",
      pushpinOptionsDescription: "å_Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map_ø",
      selectLocationText: "å_Select Location By_ø",
      myLocationText: "å_My Location_ø",
      searchText: "å_Search_ø",
      coordinatesText: "å_Latitude & Longitude Coordinates_ø",
      usng: "å_USNG Coordinates_ø",
      mgrs: "å_MGRS Coordinates_ø",
      utm: "å_UTM Coordinates_ø",
      selectLocationSDescription: "å_Allow users to select a location using these methods_ø.",
      dragTooltipText: "å_Drag the field where you want it to appear_ø",
      showHideLayerText: "å_Show Layer_ø",
      showHideLayerHelpText: "å_You can configure the GeoForm to Show/Hide Layer.This option only applies to a single layer setup_ø.",
      labelHelpMessage: "å_Label_ø",
      placeHolderHintMessage: "å_Hint Text_ø",
      placeHolderHelpMessage: "å_Help Text_ø",
      selectTextOptionValue: "å_Filter Select_ø",
      disableLogo: "å_Disable Logo_ø",
      disableLogoDescription: "å_You can configure the GeoForm to Show/Hide the Logo in the form header_ø",
      locateOnLoadText: "å_Locate On Load_ø",
      locateOnLoadDescription: "å_You can configure the GeoForm to use the current location on page load_ø",
      selectLayerFieldTabText: "å_Select Layer_ø",
      allLayerSelectOptionText: "å_All_ø",
      disableViewer: "å_Disable Viewer_ø",
      disableViewerDescription: "å_You can configure the GeoForm to disable/enable Viewer_ø",
      displayFieldHintText: "å_Selected display field will be shown in viewerMode as title field_ø"
    },
    viewer: {
      geocoderCancelText: "å_Cancel_ø",
      viewReportsTabText: "å_Submissions_ø",
      viewLegendTabText: "å_Legend_ø",
      viewAboutusTabText: "å_About_ø",
      viewMapTabText: "å_Map_ø",
      sortHeaderText: "å_Sort By_ø:",
      btnSubmitReportText: "å_Submit a Report_ø",
      geocoderPlaceholderText: "å_Zip Code, city, etc_ø.",
      noSearchResult: "å_No result found_ø",
      recordsTabTooltip: "å_View Submissions_ø",
      legendTabTooltip: "å_Legend_ø",
      aboutUsTabTooltip: "å_AboutUs_ø",
      mapTabTooltip: "å_Map_ø",
      appLoadingFailedMessage: "å_ViewerMode is Unavailable_ø",
      btnDescendingText: "å_Desc_ø",
      btnAscendingText: "å_Asc_ø",
      geometryUnavailableErrorMessage: "å_Unable to find the geometry of the feature_ø",
      infoPopupOffErrorMessage: "å_InfoPopup is off_ø",
      btnLoadMoreText: "å_Load More_ø",
      unavailableTitleText: "å_Untitled_ø",
      unavailableConfigMessage: "å_Unable to load config_ø"
    }
  })
);
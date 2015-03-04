define(
   ({
    map: {
      error: "Kan geen kaart creëren"
    },
    onlineStatus: {
      offline: "U werkt momenteel offline. Uw in te dienen meldingen worden lokaal opgeslagen totdat er een verbinding met de server kan worden gemaakt.",
      reconnecting: "Opnieuw verbinding maken&hellip;",
      pending: "${total} bewerking(en) in behandeling wordt/worden verzonden wanneer een netwerkverbinding hersteld is."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Mijn Organisatie",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mijn Content",
          favoritesLabel: "Mijn Favorieten"
        },
        title: "Webmap selecteren",
        searchTitle: "Zoeken",
        ok: "OK",
        cancel: "Annuleren",
        placeholder: "Zoekterm invoeren"
      },
      groupdlg: {
        items: {
          organizationLabel: "Mijn Organisatie",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mijn Content",
          favoritesLabel: "Mijn Favorieten"
        },
        title: "Groep selecteren",
        searchTitle: "Zoeken",
        ok: "OK",
        cancel: "Annuleren",
        placeholder: "Zoekterm invoeren"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Hier is een link naar een Geografsich formulier"
      }
    },
    user: {
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Noordwaarde",
      utm_easting: "Oostwaarde",
      utm_zone_number: "Zonenummer",
      selectLayerTabText: "${formSection} Formulier selecteren",
      geoFormGeneralTabText: "${formSection} Informatie invoeren",
      locationInformationText: "${formSection} Locatie selecteren",
      submitInformationText: "${formSection} Formulier invullen",
      submitInstructions: "Deze informatie toevoegen aan de kaart.",
      myLocationText: "Huidige locatie",
      locationDescriptionForMoreThanOneOption: "Geef de locatie op voor deze melding door op de kaart te klikken/tikken of door een van de volgende opties te gebruiken.",
      locationDescriptionForOneOption: "Geef de locatie voor deze invoer op door op de kaart te klikken/tikken of door de volgende optie te gebruiken.",
      locationDescriptionForNoOption: "Geef de locatie voor deze melding op door op de kaart te klikken/tikken.",
      addressText: "Zoeken",
      geographic: "Breedte-/lengtegraad",
      locationTabText: "Locatie",
      locationPopupTitle: "Locatie",
      submitButtonText: "Melding verzenden",
      submitButtonTextLoading: "Verzenden&hellip;",
      formValidationMessageAlertText: "De volgende velden zijn vereist:",
      selectLocation: "Selecteer een locatie voor uw voor uw melding.",
      emptylatitudeAlertMessage: "Voer een ${openLink}breedtegraad${closeLink}-coördinaat in.",
      emptylongitudeAlertMessage: "Voer een ${openLink}lengtegraad${closeLink}-coördinaat in.",
      shareUserTitleMessage: "Bedankt voor uw bijdrage!",
      entrySubmitted: "Uw melding is toegevoegd aan de kaart.",
      shareThisForm: "Dit formulier delen",
      shareUserTextMessage: "Vertel anderen om bijdragen te leveren met behulp van de volgende opties.",
      addAttachmentFailedMessage: "Kan bijlage niet toevoegen aan laag",
      addFeatureFailedMessage: "Kan object niet toevoegen aan laag",
      noLayerConfiguredMessage: "Er is een fout opgetreden bij het laden van of zoeken naar een bewerkbare objectlaag. Als u het formulier wilt weergeven en de meldingen wilt verzamelen, voegt u een objectlaag toe aan de webmap.",
      placeholderLatitude: "Breedtegraad (Y)",
      placeholderLongitude: "Lengtegraad (X)",
      latitude: "Breedtegraad",
      longitude: "Lengtegraad",
      findMyLocation: "Mijn locatie",
      finding: "Zoeken&hellip;",
      backToTop: "Terug naar boven",
      addressSearchText: "Uw melding zal hier worden geplaatst. U kunt de speld verslepen om de locatie te wijzigen.",
      shareModalFormText: "Link formulier",
      close: "Sluiten",
      locationNotFound: "Locatie is niet gevonden.",
      setLocation: "Locatie instellen",
      find: "Adres of plaats zoeken",
      attachment: "Bijlage",
      toggleDropdown: "Vervolgkeuzelijst in- en uitschakelen",
      invalidString: "Geef een geldige waarde op.",
      invalidSmallNumber: "Geef een geldige ${openStrong}integer${closeStrong} waarde op tussen -32768 en 32767.",
      invalidNumber: "Geef een geldige ${openStrong}integer${closeStrong} waarde op tussen -32768 en 32767.",
      invalidFloat: "Geef een geldige ${openStrong}decimale${closeStrong} waarde op.",
      invalidDouble: "Geef een geldige ${openStrong}decimale${closeStrong} waarde op.",
      invalidLatLong: "Voer geldige breedtegraad en lengtegraad-coördinaten in.",
      invalidUTM: "Voer geldige UTM-coördinaten in.",
      invalidUSNG: "Voer geldige USNG-coördinaten in.",
      invalidMGRS: "Voer geldige MGRS-coördinaten in.",
      geoformTitleText: "Geografisch formulier",
      domainDefaultText: "Selecteren&hellip;",
      applyEditsFailedMessage: "Uw melding kan niet worden verzonden. Probeer het opnieuw.",
      requiredFields: "Er zijn enkele fouten opgetreden. Corrigeer deze hieronder.",
      requiredField: "(vereist)",
      error: "Fout",
      textRangeHintMessage: "${openStrong}Tip:${closeStrong} Minimumwaarde ${minValue} en Maximumwaarde ${maxValue}",
      dateRangeHintMessage: "${openStrong}Tip:${closeStrong} Minimumdatum ${minValue} en Maximumdatum ${maxValue}",
      remainingCharactersHintMessage: "${value} resterende tekens",
      mapFullScreen: "Volledig scherm",
      mapRestore: "Herstellen",
      filterSelectEmptyText: "Selecteren",
      invalidLayerMessage: "Formulierlaag bestaat niet. Configureer de applicatie en stel de laag in.",
      selectedLayerText: "Alle",
      fileUploadStatus: "Status bestand uploaden",
      uploadingBadge: "&nbsp;Uploaden&hellip;",
      successBadge: "&nbsp;Geüpload",
      retryBadge: "Opnieuw proberen",
      errorBadge: "Fout met uploaden&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Bestand te groot om bij te voegen",
      exceededFileCountError: "Maximaal aantal toegestane bijlagen overschreden",
      selectFileTitle: "Een bestand selecteren",
      btnViewSubmissions: "Meldingen bekijken",
      dateFormat: "MM/DD/YYYY h:mm a"
    },
    builder: {
      invalidUser: "U beschikt niet over de nodige machtigingen om dit item te bekijken",
      invalidWebmapSelectionAlert: "De geselecteerde webmap bevat geen geldige laag die gebruikt kan worden. Voeg een bewerkbare objectlaag toe aan uw webmap om verder te gaan.",
      invalidWebmapSelectionAlert2: "Voor meer informatie raadpleegt u ${openLink}Wat is een featureservice?${closeLink}",
      selectFieldsText: "Velden voor formulier selecteren",
      selectThemeText: "Thema voor formulier selecteren",
      webmapText: "Webmap",
      layerText: "Kaartlaag",
      detailsText: "Details",
      fieldsText: "Velden",
      styleText: "Stijl",
      optionText: "Opties",
      previewText: "Voorbeeld",
      publishText: "Publiceren",
      optionsApplicationText: "Opties",
      titleText: "Builder",
      descriptionText: "Geografisch formulier is een configureerbare template voor op formulieren gebaseerde gegevensbewerking van een ${link1}Featureservice${closeLink}. Met deze applicatie kunnen gebruikers gegevens invoeren met behulp van een formulier in plaats van de pop-up van een kaart en kunnen ze profiteren van de voordelen van de ${link2}Webmap${closeLink} en bewerkbare Featureservices. Gebruik de volgende stappen om uw geografisch formulier aan te passen en te implementeren.",
      btnPreviousText: "Vorige",
      btnNextText: "Volgende",
      webmapTabTitleText: "Een webmap selecteren",
      viewWebmap: "Webmap bekijken",
      webmapDetailsText: "De geselecteerde webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. Klik op de knop \'Webmap kiezen\' om een andere webmap te selecteren",
      btnSelectWebmapText: "Webmap kiezen",
      btnSelectWebmapTextLoading: "Laden&hellip;",
      layerTabTitleText: "Bewerkbare kaartlaag selecteren",
      selectLayerLabelText: "Kaartlaag",
      selectLayerDefaultOptionText: "Kaartlaag selecteren",
      defaultBasemap: "Basiskaart wisselen",
      secondaryBasemap: "Standaard basiskaart",
      detailsTabTitleText: "Details van het formulier",
      detailTitleLabelText: "Titel",
      detailLogoLabelText: "Logoafbeelding",
      descriptionLabelText: "Formulierinstructies & Details",
      fieldDescriptionLabelText: "Help-tekst (optioneel)",
      fieldTabFieldHeaderText: "Veld",
      fieldTabLabelHeaderText: "Label",
      fieldTabDisplayTypeHeaderText: "Weergeven als",
      fieldTabOrderColumnText: "Volgorde",
      fieldTabVisibleColumnText: "Ingeschakeld",
      displayFieldText: "Weergaveveld:",
      selectMenuOption: "Menu selecteren",
      selectRadioOption: "Keuzerondje",
      selectTextOption: "Tekst",
      selectDateOption: "Datumprikker",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "Selectievakje",
      selectMailOption: "E-mail",
      selectUrlOption: "URL",
      selectTextAreaOption: "Tekstvak",
      previewApplicationText: "Voorbeeld van applicatie bekijken",
      saveApplicationText: "Applicatie opslaan",
      saveText: "Opslaan",
      toggleNavigationText: "Schakelen tussen navigatie",
      formPlaceholderText: "Mijn formulier",
      shareBuilderInProgressTitleMessage: "Geo-formulier publiceren",
      shareBuilderProgressBarMessage: "Even geduld&hellip;",
      shareBuilderTitleMessage: "Item opgeslagen",
      shareBuilderTextMessage: "U kunt nu informatie verzamelen en met anderen delen.",
      shareModalFormText: "Link formulier",
      shareBuilderSuccess: "Uw Geo-formulier is bijgewerkt en gepubliceerd!",
      geoformTitleText: "Geo-formulier",
      layerTabText: "Dit is de laag waarop het Geo-formulier wordt gebouwd. De laag moet een featureservice zijn waarop bewerken in ingeschakeld en die op de juiste wijze gedeeld is met jouw publiek.",
      detailsTabText: "Gebruik de vakken voor de details van he formulier hieronder om de titel en het logo aan te passen, en geef een korte omschrijving voor het publiek van uw Geo-formulier. In de beschrijving kunt u koppelingen naar andere bronnen en contactgegevens toevoegen en kunt u uw publiek zelfs doorsturen naar een webmapapplicatie met alle gegevens die zijn verzameld met het Geo-formulier.",
      fieldsTabText: "Hier kunt u selecteren welke velden zichtbaar zijn voor het publiek van uw Geo-formulier, de labels bewerken die ze te zien krijgen en een korte beschrijving toevoegen om gegevensinvoer te vergemakkelijken.",
      styleTabText: "Bewerk u Geo-formulier naar eigen inzicht met behulp van onderstaande thema\'s.",
      publishTabText: "Als u uw Geo-formulier hebt aangepast, slaat u de applicatie op en kunt u het gaan delen met uw publiek. U kunt altijd terugkeren naar deze builder en doorgaan met aanpassen op basis van feedback.",
      headerSizeLabel: "Headergrootte",
      smallHeader: "Kleine koptekst gebruiken",
      bigHeader: "Grote header gebruiken",
      pushpinText: "Speld",
      doneButtonText: "Opslaan en afsluiten",
      fieldTabPlaceHolderHeaderText: "Tip (optioneel)",
      enableAttachmentLabelText: "${openStrong}Bijlagen inschakelen${closeStrong}",
      enableAttachmentLabelHint: "U kunt de bijlagen hier inschakelen/uitschakelen",
      attachmentIsRequiredLabelText: "${openStrong}Bijlage vereist${closeStrong}",
      attachmentIsRequiredLabelHint: "Indien nodig kan het vereist zijn dat gebruikers een bijlage invoeren.",
      attachmentLabelText: "Label van bijlageknop",
      attachmentLabelHint: "Deze tekst verschijnt naast de Bijlageknop. U kunt deze ruimte gebruiken om te beschrijven wilt u wilt dat het publiek toevoegt (foto, video, document, etc.), het bestandsformaat dat u vraagt (.jpeg, .png, .docx, .pdf, etc.) en andere extra instructies",
      attachmentDescription: "Beschrijving van bijlage",
      attachmentHint: "Indien nodig kunt u hier aanvullende instructies voor bijlagen opgeven.",
      jumbotronDescription: "Gebruik een grote of kleine heading voor uw formulier. Een grote header kan helpen om het doel van uw applicatie te bepalen maar het verbruikt meer ruimte op uw scherm",
      shareGeoformText: "Geo-formulier delen",
      shareDescription: "Het venster voor delen maakt het makkelijk voor uw publiek om het Geo-formulier te delen met anderen zodra ze een melding hebben gedaan. Dit kan op elk moment worden uitgeschakeld.",
      defaultMapExtent: "Standaard kaartextent",
      defaultMapExtentDescription: "Na het verzenden wordt de kaart opnieuw ingesteld op de standaard kaartextent in uw webmap. Dit kan op elk moment worden uitgeschakeld.",
      pushpinOptionsDescription: "Kies uit een ruime keuze aan kleuren voor de speld op de kaart. Deze moet verschillen van de symbolen op de kaart om gebruikers te helpen hun melding op de kaart te plaatsen",
      selectLocationText: "Locatie selecteren op",
      myLocationText: "Mijn locatie",
      searchText: "Zoeken",
      coordinatesText: "Breedtegraad- en lengtegraadcoördinaten",
      usng: "USNG-coördinaten",
      mgrs: "MGRS-coördinaten",
      utm: "UTM-coördinaten",
      selectLocationSDescription: "Sta gebruikers toe om een locatie te selecteren met behulp van deze methoden.",
      dragTooltipText: "Sleep de velden naar de gewenste plek",
      showHideLayerText: "Laag weergeven",
      showHideLayerHelpText: "U kunt het Geo-formulier configureren om de laag te tonen/verbergen.Deze optie geldt alleen voor een enkele laag.",
      labelHelpMessage: "Label",
      placeHolderHintMessage: "Tekst met tips",
      placeHolderHelpMessage: "Help-tekst",
      selectTextOptionValue: "Filter selecteren",
      disableLogo: "Logo uitschakelen",
      disableLogoDescription: "U kunt het Geo-formulier configureren om het logo te tonen/verbergen in de kop van het formulier",
      locateOnLoadText: "Zoeken bij laden",
      locateOnLoadDescription: "U kunt het Geo-formulier configureren om de huidige locatie te gebruiken bij het laden van de pagina",
      selectLayerFieldTabText: "Kaartlaag selecteren",
      allLayerSelectOptionText: "Alle",
      disableViewer: "Viewer uitschakelen",
      disableViewerDescription: "U kunt het Geo-formulier configureren om de viewer uit/in te schakelen",
      displayFieldHintText: "Geselecteerde displayveld wordt getoond in viewerMode als titelveld"
    },
    viewer: {
      geocoderCancelText: "Annuleren",
      viewReportsTabText: "Meldingen",
      viewLegendTabText: "Legenda",
      viewAboutusTabText: "Informatie",
      viewMapTabText: "Kaart",
      sortHeaderText: "Sorteren op:",
      btnSubmitReportText: "Een rapport indienen",
      geocoderPlaceholderText: "Postcode, plaats enzovoort",
      noSearchResult: "Geen resultaat gevonden",
      recordsTabTooltip: "Meldingen bekijken",
      legendTabTooltip: "Legenda",
      aboutUsTabTooltip: "OverOns",
      mapTabTooltip: "Kaart",
      appLoadingFailedMessage: "ViewerMode is onbeschikbaar",
      btnDescendingText: "Aflopend",
      btnAscendingText: "Oplopend",
      geometryUnavailableErrorMessage: "Kan de geometrie van het object niet vinden",
      infoPopupOffErrorMessage: "InfoPopup is uit",
      btnLoadMoreText: "Meer laden",
      unavailableTitleText: "Naamloos",
      unavailableConfigMessage: "Kan configuratie niet laden"
    }
  })
);
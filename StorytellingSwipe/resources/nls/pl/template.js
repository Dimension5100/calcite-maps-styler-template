﻿define(
	({
		viewer: {
			loading: {
				step1: "WCZYTYWANIE APLIKACJI",
				step2: "WYCZYTYWANIE DANYCH",
				step3: "INICJOWANIE",
				fail: "Przepraszamy, wczytywanie narzędzia odsłaniania nie powiodło się",
				loadBuilder: "PRZEŁĄCZANIE DO TRYBU KREATORA",
				failButton: "Ponów próbę"
			},
			errors: {
				boxTitle: "Wystąpił błąd",
				portalSelf: "Błąd krytyczny: Nie można pobrać konfiguracji portalu",
				invalidConfig: "Błąd krytyczny: Nieprawidłowa konfiguracja",
				invalidConfigNoWebmap: "Błąd krytyczny: Nieprawidłowa konfiguracja (brak zdefiniowanej mapy internetowej)",
				createMap: "Nie można utworzyć mapy",
				invalidApp: "Błąd krytyczny: Nie można wczytać aplikacji",
				initMobile: "Witamy w internetowej aplikacji swipe (z funkcją odsłaniania). Aplikacja nie została skonfigurowana. Interaktywny kreator nie jest obsługiwany na urządzeniach przenośnych.",
				noBuilderIE8: "Interaktywny kreator narzędzia odsłaniania nie jest obsługiwany przez przeglądarkę Internet Explorer w wersji starszej niż 9.",
				noLayerView: "Witamy w internetowej aplikacji swipe (z funkcją odsłaniania).<br />Aplikacja nie została jeszcze skonfigurowana.",
				appSave: "Błąd podczas zapisywania aplikacji internetowej",
				mapSave: "Błąd podczas zapisywania mapy internetowej",
				notAuthorized: "Nie masz uprawnień do uzyskania dostępu do tej aplikacji.",
				conflictingProjectionsTitle: "Konflikt odwzorowań",
				conflictingProjections: "Narzędzie odsłaniania nie obsługuje dwóch map internetowych o różnych odwzorowaniach. Przejdź do ustawień i wybierz mapę internetową o tym samym odwzorowaniu co pierwsza użyta mapa.",
				cpButton: "Zamknij"
			},
			mobileView: {
				hideIntro: "UKRYJ WPROWADZENIE",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dane"
			},
			desktopView: {
				storymapsText: "Mapa z historią",
				builderButton: "Przełącz do trybu kreatora",
				bitlyTooltip: "Pobierz skrócone łącze do aplikacji"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURACJA APLIKACJI",
				buttonSave: "ZAPISZ",
				buttonDiscard: "ANULUJ",
				buttonSettings: "Ustawienia",
				buttonView: "Tryb wyświetlania",
				buttonItem: "Otwórz element aplikacji internetowej",
				noPendingChange: "Brak oczekujących zmian",
				unSavedChangeSingular: "1 niezapisana zmiana",
				unSavedChangePlural: "niezapisane zmiany",
				popoverDiscard: "Na pewno chcesz odrzucić wszystkie niezapisane zmiany?",
				yes: "Tak",
				no: "Nie",
				popoverOpenViewExplain: "Otwarcie przeglądarki spowoduje utratę niezapisanych zmian",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Anuluj",
				popoverSaveWhenDone: "Nie zapomnij zapisać po zakończeniu pracy",
				closeWithPendingChange: "Na pewno chcesz zatwierdzić czynność? Twoje zmiany zostaną utracone.",
				gotIt: "OK",
				savingApplication: "Zapisywanie aplikacji",
				saveSuccess: "Aplikacja została pomyślnie zapisana",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				signIn: "Zaloguj się na konto,",
				signInTwo: "aby zapisać aplikację."
			},
			header:{
				editMe: "Zmodyfikuj mnie!",
				templateTitle: "Ustaw tytuł szablonu",
				templateSubtitle: "Ustaw podtytuł szablonu"
			},
			settings: {
				settingsHeader: "Ustawienia aplikacji",
				modalCancel: "Anuluj",
				modalApply: "Zastosuj"
			},
			settingsColors: {
				settingsTabColor: "Motyw",
				settingsColorExplain: "Wybierz motyw aplikacji lub zdefiniuj własną kolorystykę.",
				settingsLabelColor: "Kolory nagłówka i tła panelu bocznego"
			},
			settingsHeader: {
				settingsTabLogo: "Nagłówek",
				settingsLogoExplain: "Dostosuj logo w nagłówku (maksymalny rozmiar to 250 x 50 pikseli).",
				settingsLogoEsri: "Logo firmy Esri",
				settingsLogoNone: "Brak logo",
				settingsLogoCustom: "Logo niestandardowe",
				settingsLogoCustomPlaceholder: "Adres URL obrazu",
				settingsLogoCustomTargetPlaceholder: "łącze przekierowujące do innej strony",
				settingsLogoSocialExplain: "Dostosuj łącze nagłówka wyświetlane u góry po prawej.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Łącze",
				settingsLogoSocialDisabled: "Opcja ta została wyłączona przez Administratora"
			},
			settingsExtent: {
				settingsTabExtent: "Zasięg",
				settingsExtentExplain: "Ustaw początkowy zasięg za pomocą poniższej mapy interaktywnej.",
				settingsExtentExplainBottom: "Zdefiniowany zasięg zostanie użyty do modyfikacji początkowego zasięgu mapy internetowej. Należy pamiętać, że zasięg ten nie będzie używany podczas korzystania z serii zwijania.",
				settingsExtentDateLineError: "Zasięg nie może przebiegać przez południk 180°",
				settingsExtentDateLineError2: "Błąd w obliczaniu zasięgu",
				settingsExtentDrawBtn: "Określ nowy zasięg",
				settingsExtentModifyBtn: "Zmień bieżący zasięg",
				settingsExtentApplyBtn: "Zastosuj do mapy głównej",
				settingsExtentUseMainMap: "Użyj głównego zasięgu mapy"
			}
        },
		swipe: {
			mobileData: {
				noData: "Brak danych do wyświetlenia!",
				noDataExplain: "Dotknij mapę, aby wybrać obiekt i powrócić tutaj",
				noDataMap: "Brak danych dla tej mapy",
				noPopup: "Nie znaleziono okna podręcznego dla tego obiektu"
			},
			mobileLegend: {
				noLegend: "Brak legendy do wyświetlenia."
			},
			swipeSidePanel: {
				editTooltip: "Ustaw opis panelu bocznego",
				editMe: "Zmodyfikuj mnie!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Brak danych do wyświetlenia",
				noFeatureExplain: "Dotknij mapę, aby wybrać obiekt"
			},
			settingsLayout: {
				settingsTabLayout: "Styl odsłaniania",
				settingsLayoutExplain: "Wybierz styl dla narzędzia odsłaniania.",
				settingsLayoutSwipe: "Pasek pionowy",
				settingsLayoutSpyGlass: "Lunetka",
				settingsLayoutSelected: "Wybrany układ",
				settingsLayoutSelect: "Wybierz ten układ",
				settingsSaveConfirm: "Niektóre z wprowadzonych zmian wymagają zapisania i ponownego wczytania aplikacji"
			},
			settingsDataModel: {
				settingsTabDataModel: "Typ zwijania",
				settingsDataModelExplainSwipe: "Co mogą zwijać użytkownicy?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Wybierz warstwę lub mapę internetową, która pojawi się w lunetce.",
				settingsDataModelOneMap: "Warstwa mapy internetowej",
				settingsDataModel1Explain: "Wybierz warstwę, która ma być zwijana.",
				settingsDataModel1Warning: "Jeśli warstwa jest ukryta pod górnymi warstwami, użycie zwijania nie przyniesie rezultatów.",
				settingsDataModel1SpyGlassExplain: "Wybierz warstwę, która ma pojawić się w lunetce.",
				settingsDataModelTwoMaps: "Dwie mapy internetowe",
				settingsDataModelLayerIds: "Identyfikatory warstwy mapy internetowej",
				settingsDataModelSelected: "Wybrany typ",
				settingsDataModelWebmapSwipeId1: "Identyfikator mapy internetowej po prawej stronie",
				settingsDataModelWebmapSwipeId2: "Identyfikator mapy internetowej po lewej stronie",
				settingsDataModelWebmapGlassId1: "Identyfikator głównej mapy internetowej",
				settingsDataModelWebmapGlassId2: "Identyfikator mapy internetowej z lunetki",
				settingsDataModelSelect: "Wybierz ten typ",
				settingsDataModel2Explain: "Odsłanianie z inną mapą internetową.",
				settingsDataModel2SpyGlassExplain: "Odkryj kolejną mapę internetową.",
				settingsDataModel2HelpTitle: "ł_How do I find a web map's ID?_ą",
				settingsDataModel2HelpContent: "Skopiuj i wklej cyfry po znaku „=” w adresie URL mapy internetowej"
			},
			settingsLegend: {
				settingsTabLegend: "Układ aplikacji",
				settingsLegendExplain: "Wybierz ustawienia układu aplikacji.",
				settingsLegendEnable: "Włącz legendę",
				settingsDescriptionEnable: "Włącz opis",
				settingsBookmarksEnable: "Włącz serię odsłaniania",
				settingsPopupDisable: "Włącz okno podręczne",
				settingsLocationSearchEnable: "Włącz wyszukiwanie przy użyciu lokatora",
				settingsGeolocatorEnable: "Włącz geolokator",
				settingsLegendHelpContent: "Aby ulepszyć zawartość legendy, skorzystaj z tabeli zawartości przeglądarki map ArcGIS.com (Ukryj w legendzie)",
				settingsSeriesHelpContent: "Seria zwijania to opcja nawigacji przy użyciu kart, która kieruje użytkownika w pewnym zakresie i wyświetla tytuł oraz tekst opisu w panelu bocznym. Podczas pierwszej aktywacji zakładki mapy internetowej zostaną użyte do wstępnego wypełnienia paska serii. Jeżeli wyłączysz później opcję serii, zostanie też wyłączony pasek serii, ale konfiguracja serii zostanie zachowana na przyszłość.", 
				settingsSeriesHelpContent2: "ł_Swipe series lets you create and edit a selection of locations with accompanying titles and text.  If your web map has bookmarks, they'll be displayed.  You can disable the series, but the configuration will be preserved for future use._ą",
				settingsSeriesHelpLink: "ł_See an example of an application with a swipe series here_ą",
				preview: "Podgląd interfejsu użytkownika",
				settingsLocateButtonExplain: "ł_This functionality is supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._ą",
				settingsLocateButton: "Włącz przycisk Lokalizuj w obsługiwanych przeglądarkach",
				settingsAddressSearch: "Włącz narzędzie wyszukiwania adresów"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Okno podręczne",
				settingsSwipePopupExplain: "Dostosuj wygląd nagłówka okien podręcznych, aby pomóc użytkownikom skojarzyć okna z warstwami map.",
				settingsSwipePopupSwipe1: "Mapa po lewej stronie",
				settingsSwipePopupSwipe2: "Mapa po prawej stronie",
				settingsSwipePopupGlass1: "Mapa główna",
				settingsSwipePopupGlass2: "Mapa w lunetce",
				settingsSwipePopupTitle: "Tytuł nagłówka",
				settingsSwipePopupColor: "Kolor nagłówka"
			},
			initPopup: {
				initHeader: "Witamy w kreatorze aplikacji odsłaniania",
				modalNext: "Dalej",
				modalPrev: "Wstecz",
				modalApply: "Otwórz aplikację"
			},
			seriesPanel: {
				title: "Tytuł",
				descr: "Opis",
				discard: "Odrzuć zakładkę",
				saveExtent: "Ustaw zasięg zakładki",
				discardDisabled: "Nie można usunąć tej zakładki. Serie zwijania można wyłączyć w Ustawieniach."
			}
		}
    })
);
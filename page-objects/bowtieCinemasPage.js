var bowtieCinemasAutomationCommands = {

    ifIsPresent: function(elementInQuestion){
        this
            this.elements(elementInQuestion, results =>{
                if (results.value.length > 0) {
                    this.click(elementInQuestion)
                }
                else {
                    console.log("Intended Element does NOT Exist, continuing test...")}
            return this
        });
    },
    clickAndAssertVisible: function(elementInQuestion){
        this
            this.assert.visible(elementInQuestion)
            this.click(elementInQuestion)
        return this
            
    },
    cycleSliderButtons: function(sliderButtonVariables){
        this
            this.assert.visible(sliderButtonVariables.buttonExistant)
            this.click(sliderButtonVariables.buttonToClick)
            this.assert.visible(sliderButtonVariables.visibleSlideImage)
            .pause(200)
        return this
    }
    

}







module.exports = {
    url: 'https://www.bowtiecinemas.com/',
    commands: [ bowtieCinemasAutomationCommands ],
    elements: {
        //FIELD SELECTORS

    //Top of Screen Items: Dropdowns, Search by Movie or Location

    locationsDropdown: {
        selector: '(//li[@class="c-dropdown jsMenuItem"])[1]',
        locateStrategy: 'xpath'
    },

    criterionClubDropdown: {
        selector: '(//li[@class="c-dropdown jsMenuItem"])[2]',
        locateStrategy: 'xpath',
    },

    giftCardsDropdown: {
        selector: '(//li[@class="c-dropdown jsMenuItem"])[3]',
        locateStrategy: 'xpath',

    },
    programsDropdown: {
        selector: '(//li[@class="c-dropdown jsMenuItem"])[4]',
        locateStrategy: 'xpath',
    },
    rentalsDropdown: {
        selector: '(//li[@class="c-dropdown jsMenuItem"])[5]',
        locateStrategy: 'xpath',
    },
    dropdownVisibleTab: 'div[class="c-dropdown__wrapper jsSubNav is-visible"]',

    //Homepage Buttons, SearchBar Selectors, More Info Buttons
    homeButton: 'a[href="/"]',
    searchByMovieOrLocation: 'input[class="c-search__input jsNavSearchInput"]',
    searchByMovieOrLocationSubmitButton: 'button[class="c-search__submit c-search__submit--nav"]',
    searchResultsField: {
        selector: '//div[@class="c-results jsResults"]',
        locateStrategy: 'xpath',
    },
    //MOVIE SHOWTIMES FIELD
    showtimesFieldBox: {
        selector: '//div[@class="c-showtimes jsShowtimes"]',
        locateStrategy: 'xpath',
    },
    safeCinemaAtBowTieButton: {
        selector: '(button[@class="o-btn"])[1]',
        locateStrategy: 'xpath',
    },
    experienceBowTieUltimateButton: {
        selector: '(button[@class="o-btn"])[2]',
        locateStrategy: 'xpath',
    },
    flashbackCinemaButton: {
        selector: '(button[@class="o-btn"])[3]',
        locateStrategy: 'xpath'
    },

    chooseMyBowTieButton: 'button[class="o-btn o-btn--inverted o-btn--full o-btn--shadow jsPickHouse"]',
    //
    //Slider Buttons on Featured Movies & News Sliders
    sliderButton1: {
        selector: '(//li)[38]',
        locateStrategy: 'xpath',
    },
    sliderButton2: {
        selector: '(//li)[39]',
        locateStrategy: 'xpath',
    },
    sliderButton3: {
        selector: '(//li)[40]',
        locateStrategy: 'xpath',
    },
    sliderButton4: {
        selector: '(//li)[41]',
        locateStrategy: 'xpath',
    },
    sliderButton5: {
        selector: '(//li)[42]',
        locateStrategy: 'xpath',
    },
    sliderButton6: {
        selector: '(//li)[43]',
        locateStrategy: 'xpath',
    },
    sliderButton7: {
        selector: '(//li)[44]',
        locateStrategy: 'xpath',
    },
    sliderButton8: {
        selector: '(//li)[45]',
        locateStrategy: 'xpath',
    },
    sliderButton9: {
        selector: '(//li)[46]',
        locateStrategy: 'xpath',
    },
    sliderButton10: {
        selector: '(//li)[47]',
        locateStrategy: 'xpath',
    },
    sliderButton11: {
        selector: '(//li)[48]',
        locateStrategy: 'xpath',
    },
    sliderButton12: {
        selector: '(//li)[49]',
        locateStrategy: 'xpath',
    },
    sliderButton13: {
        selector: '(//li)[50]',
        locateStrategy: 'xpath',
    },
    sliderButton14: {
        selector: '(//li)[51]',
        locateStrategy: 'xpath',
    },
    sliderButton15: {
        selector: '(//li)[52]',
        locateStrategy: 'xpath',
    },
    sliderButton16: {
        selector: '(//li)[53]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame12: {
        selector: '//a[@data-slick-index="11"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame11: {
        selector: '//a[@data-slick-index="10"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame10: {
        selector: '//a[@data-slick-index="9"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame9: {
        selector: '//a[@data-slick-index="8"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame8: {
        selector: '//a[@data-slick-index="7"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame7: {
        selector: '//a[@data-slick-index="6"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame6: {
        selector: '//a[@data-slick-index="5"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame5: {
        selector: '//a[@data-slick-index="4"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame4: {
        selector: '//a[@data-slick-index="3"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame3: {
        selector: '//a[@data-slick-index="2"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame2: {
        selector: '//a[@data-slick-index="1"]',
        locateStrategy: 'xpath',
    },
    sliderImageFrame1: {
        selector: '//a[@data-slick-index="0"]',
        locateStrategy: 'xpath',
    },
    //LOCATION DROPDOWN SUB OPTIONS (only accessible while Location Dropdown Open)
    //Colorado
    movieland7BasaltDrop: 'a[href="/movieland-7"]',
    //Connecticut
    criterionCinemasNewHavenDrop: 'a[href="/criterion-cinemas"]',
    landmark9StamfordDrop: 'a[href="/landmark-9"]',
    newCanaanPlayhouseNewCanaanDrop: 'a[href="/playhouse"]',
    ultimateMajestic6StamfordDrop: 'a[href="/majestic-6"]',
    ultimateMarquis16TrumbullDrop: 'a[href="/marquis-16"]',
    ultimateRegent8SouthNorwalkDrop: 'a[href="/regent-8"]',
    ultimateRoyale6NorwalkDrop: 'a[href="/royale-6"]',
    //Maryland
    harbour9AnnapolisDrop: 'a[href="/harbour-9"]',
    ultimateAnnapolisMall11AnnapolisDrop: 'a[href="/annapolis-mall-11"]',
    //New Jersey
    hobokenCinemasHobokenDrop: 'a[href="/hoboken-cinemas"]',
    millburnCinemasMillburnDrop: 'a[href="/millburn-cinemas"]',
    warnerTheaterRidgewoodDrop: 'a[href="/warner-quad"]',
    //New York
    bronxvilleCinemasBronxvilleDrop: 'a[href="/bronxville-cinemas"]',
    criterionCinemas11SaratogaSpringsDrop: 'a[href="/criterion-cinemas-11-btx"]',
    movieland6SchenectadyDrop: 'a[href="/movieland-6"]',
    wiltonMallCinemasWiltonDrop: 'a[href="/wilton-mall"]',
    //Virginia
    criterionCinemasAtMovielandRichmondDrop: 'a[href="/criterion-cinemas-at-movieland"]',
    movielandAtBoulevardSquareRichmondDrop: 'a[href="/movieland-at-boulevard-square"]',
    restonTownCenter11RestonDrop: 'a[href="/reston-town-center-11"]',
    // THEATER PROFILE PAGE SELECTORS
    theaterProfileHeader: 'div[class="c-theater-header]',
    
    theaterProfileName: 'h1[class="c-theater-header__name"]',
    
    theaterProfileAddress: {
        selector: '(//p[@class="c-theater-header__address"])[1]',
        locateStrategy: 'xpath',
    },
    theaterProfilePhone: {
        selector: '(//p[@class="c-theater-header__address"])[2]',
        locateStrategy: 'xpath',
    },
    //CRITERION CLUB DROPDOWN SUB OPTIONS (only accessible while Location Dropdown Open)
    criterionJoinTodayButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full o-btn--short"])[1]',
        locateStrategy: 'xpath',
    },
    criterionLogInButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full o-btn--short"])[2]',
        locateStrategy: 'xpath',
    },
    criterionMoreInfoButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[1]',
        locateStrategy: 'xpath',
    },
    criterionClubBlueSignUp: {
        selector: '(//a[@class="proceed-link"])[1]',
        locateStrategy: 'xpath',
    },
    criterionClubBlueDetailsField: {
        selector: '//form[@action="/Browsing/Loyalty/SignUp/2?membershipId=1"]',
        locateStrategy: 'xpath',
    },
    criterionClubLoyaltyCreateLogIn: {
        selector: '(//a[@class="page-action"])[1]',
        locateStrategy: 'xpath',
    },
    criterionClubPageInfoBox: 'div[class="l-page__content"]',
    
    //GIFT CARDS DROPDOWN SUB OPTIONS (only accesible while Gift Cards Dropdown Open)
    giftCardsBonusTicketsMoreInfoButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[2]',
        locateStrategy: 'xpath',
        
    },
    bonusTicketsPageInfoBox: {
        selector: '//div[@class="fxp-content"]',
        locateStrategy: 'xpath',
    },
    giftCardsGiftCardsMoreInfoButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[3]',
        locateStrategy: 'xpath',
    },
    giftCardsPurchaseGiftCardsInfoBox: {
        selector: '//div[@class="fxp-content"]',
        locateStrategy: 'xpath',
    },
    giftCardsJackAndHarrysPopcornMoreInfoButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[4]',
        locateStrategy: 'xpath', 
    },
    giftCardsJackAndHarrysPopcornPageContent: {
        selector: '//div[@class="c-hero__content"]',
        locateStrategy: 'xpath',
    },
    //PROGRAMS DROPDOWN SUB OPTIONS (only accesible while Programs Dropdown Open)
    programsFlashbackCinemaMoreInfoButton: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[5]',
        locateStrategy: 'xpath',
    },
    programsSafeCinemaAtBowTieMoreInfoButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[6]',
        locateStrategy: 'xpath',
    },
    programsNewsletterProgramMoreInfoDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[7]',
        locateStrategy: 'xpath',
    },
    programsFlashbackCinemaPageInfo: {
        selector: '//div[@class="c-hero__content"]',
        locateStrategy: 'xpath',
    },
    programsSafeCinemaAtBowTiePageInfo: {
        selector: '//div[@class="c-hero__content"]',
        locateStrategy: 'xpath',
    },
    programsNewsletterProgramPageInfo: {
        selector: '//div[@class="c-hero__content"]',
        locateStrategy: 'xpath',
    },// RENTALS DROPDOWN OPTIONS
    rentalsBirthdayPartiesButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[8]',
        locateStrategy: 'xpath',
    },
    rentalsCorporateButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[9]',
        locateStrategy: 'xpath',
    },
    rentalsPrivateMoviePartyButtonDrop: {
        selector: '(//button[@class="o-btn o-btn--full c-dropdown__btn"])[10]',
        locateStrategy: 'xpath',
    },
    rentalsBirthdayPartiesPageHeader: '.c-hero__content',
    rentalsCorporatePageHeader: '.c-hero__content',
    rentalsPrivateMoviePartyPageHeader: '.c-hero__content',

    }

}

//WORKBENCH

//*[@id="home"]/main/div[4]/div[1]/div/section/a/button

//
    //Covid Rules, Regulations and Expectations Page
    //safeCinemaAtBowtieButton: '', //Needs x-path (search by text)
    //safeCinemaAtBowtieHeader: '', //Needs x-path (search by text)
    //safeCinemaAtBowtieSummary: '', //Needs x-path (search by text)

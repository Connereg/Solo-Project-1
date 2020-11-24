var pageObject = {}
const { assert } = require('console')
let bowtieCinemasAutomationCommands = require('../page-objects/bowtieCinemasPage')
let theaterProfileInfoArray = require('../testAssets/bowtieCinemasTestAssets1')
let homepageSliderButtonInfoArray = require('../testAssets/bowtieCinemasTestAssets2')
let searchbarLoopInputArray = require('../testAssets/bowtieCinemasTestAssets3')
module.exports = {
    beforeEach: browser => {
            pageObject = browser.page.bowtieCinemasPage()
            pageObject
                .navigate()
    },
    after: browser => {
            browser
            .end()
        
        },
        'Wait Out Pop-Up Banner' : browser => {
            pageObject
            .pause(500)
            .pause(5000)

        },    //LOCATIONS DROPDOWN OPTIONS VERIFY LOOP TEST : SUCCESSFUL
        'Location Dropdown Selector Test' : browser => {
            pageObject
            theaterProfileInfoArray.forEach(locationVariables => {
                pageObject
                .click('@locationsDropdown')
                .assert.visible('@dropdownVisibleTab')
                .pause(300)
                .click(locationVariables.locationDropdownOption)
                .pause(300)
                .waitForElementPresent('@theaterProfileName')
                .verify.containsText('@theaterProfileName', locationVariables.expectedProfileName)
                .verify.containsText('@theaterProfileAddress', locationVariables.expectedProfileAddress)
                .verify.containsText('@theaterProfilePhone', locationVariables.expectedProfilePhone)
                .click('@homeButton')
                .pause(1000)
            })
        }, //SUCCESSFUL
        'Criterion Club Dropdown Visible' : browser => {
            pageObject
            .clickAndAssertVisible('@criterionClubDropdown')
            //close dropdown
            .click('@criterionClubDropdown')

        }, //Clicks and Asserts through Criterion Club Dropdown options: SUCCESSFUL
        'Criterion Club Dropdown Links Operate As Intended' : browser => {
            pageObject
            .pause(500)
            .clickAndAssertVisible('@criterionClubDropdown')
            .pause(500)
            .clickAndAssertVisible('@criterionJoinTodayButtonDrop')
            .waitForElementPresent('@criterionClubBlueSignUp')
            .clickAndAssertVisible('@criterionClubBlueSignUp')
            .clickAndAssertVisible('@criterionClubBlueDetailsField')
            pageObject.navigate()
            .waitForElementPresent('@criterionClubDropdown')
            .click('@criterionClubDropdown')
            .pause(500)
            .clickAndAssertVisible('@criterionLogInButtonDrop')
            .waitForElementPresent('@criterionClubLoyaltyCreateLogIn')
            .clickAndAssertVisible('@criterionClubLoyaltyCreateLogIn')
            .pause(500)
            .assert.visible('#loyalty-activate-card')
            pageObject.navigate()
            .waitForElementPresent('@criterionClubDropdown')
            .click('@criterionClubDropdown')
            .waitForElementPresent('@criterionMoreInfoButtonDrop')
            .clickAndAssertVisible('@criterionMoreInfoButtonDrop')
            .pause(500)
            .assert.visible('@criterionClubPageInfoBox')
            pageObject.navigate()   
   
        }, //SUCCESSFUL
        'Gift Cards Dropdown Visible' : browser => {
            pageObject
            .pause(500)
            .clickAndAssertVisible('@giftCardsDropdown')
            //close dropdown
            .click('@giftCardsDropdown')
            
        }, //SUCCESSFUL
        'Gift Cards Dropdown Selectors Work as Intended' : browser => {
            pageObject
            .pause(1000)
            .click('@giftCardsDropdown')  
            .waitForElementPresent('@giftCardsBonusTicketsMoreInfoButtonDrop')
            .clickAndAssertVisible('@giftCardsBonusTicketsMoreInfoButtonDrop')
            .waitForElementPresent('@bonusTicketsPageInfoBox')
            .verify.containsText('@bonusTicketsPageInfoBox', "Our large volume ticket program provides a great opportunity for your business or organization to offer lower cost movie tickets to your employees, members or guests.")
            .click('@homeButton')
            .pause(500)
            .click('@giftCardsDropdown')
            .waitForElementPresent('@giftCardsGiftCardsMoreInfoButtonDrop')
            .clickAndAssertVisible('@giftCardsGiftCardsMoreInfoButtonDrop')
            .waitForElementPresent('@giftCardsPurchaseGiftCardsInfoBox')
            .verify.containsText('@giftCardsPurchaseGiftCardsInfoBox', "PURCHASE GIFT CARDS")
            .click('@homeButton')
            .click('@giftCardsDropdown')
            .waitForElementPresent('@giftCardsJackAndHarrysPopcornMoreInfoButtonDrop')
            .clickAndAssertVisible('@giftCardsJackAndHarrysPopcornMoreInfoButtonDrop')
            .waitForElementPresent('@giftCardsJackAndHarrysPopcornPageContent')
            .verify.containsText('@giftCardsJackAndHarrysPopcornPageContent', "JACK AND HARRY'S POPCORN")
            .click('@homeButton')
        
        }, //SUCCESSFUL  
        'Programs Dropdown is Visible' : browser => {
            pageObject
            .pause(500)
            .clickAndAssertVisible('@programsDropdown')
            //close dropdown
            .click('@programsDropdown')
        
        }, //SUCCESSFUL
        'Programs Dropdown Options Work as Intended' : browser => {
            pageObject
            .pause(500)
            .click('@programsDropdown')  
            .waitForElementPresent('@programsFlashbackCinemaMoreInfoButton')
            .clickAndAssertVisible('@programsFlashbackCinemaMoreInfoButton')
            .waitForElementPresent('@programsFlashbackCinemaPageInfo')
            .verify.containsText('@programsFlashbackCinemaPageInfo', "FLASHBACK CINEMA")
            .click('@homeButton')
            .pause(500)
            .click('@programsDropdown')
            .waitForElementPresent('@programsSafeCinemaAtBowTieMoreInfoButtonDrop')
            .clickAndAssertVisible('@programsSafeCinemaAtBowTieMoreInfoButtonDrop')
            .waitForElementPresent('@programsSafeCinemaAtBowTiePageInfo')
            .verify.containsText('@programsSafeCinemaAtBowTiePageInfo', "SAFE CINEMA AT BOW TIE")
            .click('@homeButton')
            .click('@programsDropdown')
            .waitForElementPresent('@programsNewsletterProgramMoreInfoDrop')
            .clickAndAssertVisible('@programsNewsletterProgramMoreInfoDrop')
            .waitForElementPresent('@programsNewsletterProgramPageInfo')
            .verify.containsText('@programsNewsletterProgramPageInfo', "NEWSLETTER PROGRAM")
            .click('@homeButton')
        
        }, //SUCCESSFUL 
        'Rentals Dropdown is Visible' : browser => {
            pageObject
            .pause(500)
            .clickAndAssertVisible('@rentalsDropdown')
            //close dropdown
            .click('@rentalsDropdown')    
        }, //SUCCESSFUL
        'Programs Dropdown Options Work as Intended' : browser => {
            pageObject
            .pause(500)
            .click('@rentalsDropdown')  
            .waitForElementPresent('@rentalsBirthdayPartiesButtonDrop')
            .clickAndAssertVisible('@rentalsBirthdayPartiesButtonDrop')
            .waitForElementPresent('@rentalsBirthdayPartiesPageHeader')
            .verify.containsText('@rentalsBirthdayPartiesPageHeader', "BIRTHDAY PARTIES")
            .click('@homeButton')
            .pause(500)
            .click('@rentalsDropdown')
            .waitForElementPresent('@rentalsCorporateButtonDrop')
            .clickAndAssertVisible('@rentalsCorporateButtonDrop')
            .waitForElementPresent('@rentalsCorporatePageHeader')
            .verify.containsText('@rentalsCorporatePageHeader', "CORPORATE EVENTS AND RENTALS")
            .click('@homeButton')
            .click('@rentalsDropdown')
            .waitForElementPresent('@rentalsPrivateMoviePartyButtonDrop')
            .clickAndAssertVisible('@rentalsPrivateMoviePartyButtonDrop')
            .waitForElementPresent('@rentalsPrivateMoviePartyPageHeader')
            .verify.containsText('@rentalsPrivateMoviePartyPageHeader', "PRIVATE MOVIE PARTY")
            .click('@homeButton')


        }, //UNSUCCESSFUL NEED TO ASK QUESTIONS
        'Testing Slider Buttons Interactibility & Appropriate Slide' : browser => {
            homepageSliderButtonInfoArray.forEach(inputs => {
                pageObject.cycleSliderButtons(inputs)            
        })    
    
        }, //SUCCESSFUL
        'Searchbar is clickable' : browser => {
            pageObject
                .waitForElementPresent('@searchByMovieOrLocation')
                .clickAndAssertVisible('@searchByMovieOrLocation')
        }, //SUCCESSFUL
        'Can Search by Zip And City Name Accurately' : browser => {
            pageObject
            searchbarLoopInputArray.forEach(searchLoopVariables => {
                pageObject
                .setValue('@searchByMovieOrLocation', searchLoopVariables.inputsearch)
                .clickAndAssertVisible('@searchByMovieOrLocationSubmitButton')
                .pause(500)
                .waitForElementPresent('@searchResultsField')
                .assert.containsText('@searchResultsField', searchLoopVariables.checkResultCardHeader)
                .click('@homeButton')
            })
        },  //SUCCESSFUL
        'Can Search by Movie Title' : browser => {
            pageObject
            .setValue('@searchByMovieOrLocation', "Tenet")
            .click('@searchByMovieOrLocationSubmitButton')
            .waitForElementPresent('.c-movie-block__grid-poster')
            .clickAndAssertVisible('.c-movie-block__grid-poster')
            .waitForElementPresent('@showtimesFieldBox')
            .assert.visible('@showtimesFieldBox')
            .click('@homeButton')
            .waitForElementPresent('@searchByMovieOrLocation')
            .setValue('@searchByMovieOrLocation', "The War With Grandpa")
            .click('@searchByMovieOrLocationSubmitButton')
            .waitForElementPresent('.c-movie-block__grid-poster')
            .clickAndAssertVisible('.c-movie-block__grid-poster')
            .waitForElementPresent('@showtimesFieldBox')
            .assert.visible('@showtimesFieldBox')
            .click('@homeButton')
            .setValue('@searchByMovieOrLocation', "NOT A CURRENT MOVIE")
            .click('@searchByMovieOrLocationSubmitButton')
            .waitForElementPresent('div[class="c-results jsResults')
            .verify.containsText('div[class="c-results jsResults', "No results found")
            .click('@homeButton')

        }
        
            //KEEP IT SIMPLE STUPID!!!//
}

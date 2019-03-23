var cruisePage = {}
let GeniusClicks = require("../testAssets/GeniusClicks")
module.exports = {
    beforeEach:  browser =>{
        cruisePage = browser.page.cruisePage()
        cruisePage.navigate()
        
    },
    after: browser => {
        browser.end()

    },

'QO2MB-124 Cruise Genius Test': browser => {
// The user navigates to Cruiseline.com
// User Clicks on the "Cruise Genius" link
// User follows the prompts, selecting the desired responses.
// User clicks on "View Results"
// The user should receive recommendations for cruises based on selections.
cruisePage
GeniusClicks (cruisePage)

}
    }

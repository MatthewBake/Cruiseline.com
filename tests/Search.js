var cruisePage = {}
let Searchy = require("../testAssets/Searchy")
let SearchItems = require("../testAssets/SearchItems")

module.exports = {
    beforeEach:  browser =>{
        cruisePage = browser.page.cruisePage()
        cruisePage.navigate()
        
    },
    after: browser => {
        browser.end()

    },
'QO2MB-125 Search Test': browser => {
    
// The user navigates to Cruiseline.com
// The user inputs the desired search item in the search box
// The user receives results based on the inputted item.
    cruisePage
    SearchItems (cruisePage, Searchy)
}
}
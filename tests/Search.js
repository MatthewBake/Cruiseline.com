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
'Search Test': browser => {
    cruisePage
    SearchItems (cruisePage, Searchy)
}
}
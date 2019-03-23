module.exports = CLSearch = (Searchy, CruiseSearch) => {
    CruiseSearch.forEach(SearchIt =>{
    Searchy
    .click('@Search')
    .setValue('@Search', SearchIt)
    .sendKeys('@Search', '\uE007')
    .pause(3000)
    .expect.element('p[class="text-muted"]').text.does.not.contain('No Results')
    Searchy
    .click('@Logo')
})
}
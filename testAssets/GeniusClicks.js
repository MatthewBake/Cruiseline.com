module.exports = GeniusClicks = (Cruise, CruiseClicks) => {
    CruiseClicks
        Cruise
        .click('@map')
        .click('@genius')
        .waitForElementVisible('@location', 5000)
        .clearValue('@location')
        .setValue('@location', '84005')
        .click('@nextBtn1')
        .waitForElementVisible('@Adventure')
        .click('@Adventure')
        .click('@Beach')
        .click('@nextBtn2')
        .waitForElementVisible('@Dining')
        .click('@Dining')
        .click('@Service')
        .click('@nextBtn3')
        .waitForElementVisible('@Medium')
        .click('@Medium')
        .click('@nextBtn4')
        .waitForElementVisible('@Piggy')
        .click('@Piggy')
        .click('@nextBtn5')
        .waitForElementVisible('@anyDate')
        .click('@anyDate')
        .waitForElementVisible('@View')
        .click('@View')
        .waitForElementVisible('@Results')
    }


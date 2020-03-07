@ignore
Feature:

Background:
* configure driver = { type: 'chrome', showDriverLog: true, httpConfig: { readTimeout: 120000 } }
* def locators = read('locators.json')
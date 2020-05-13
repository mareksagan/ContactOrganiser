import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('Enter GURU99 Name', () => {
  it('should add a Name as GURU99', () => {
  browser.get('https://angularjs.org');
  element(by.model('yourName')).sendKeys('GURU99');
  let guru = element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
  expect(guru.getText()).toEqual('Hello GURU99!');
   });
 });

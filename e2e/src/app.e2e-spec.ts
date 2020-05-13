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

describe('Shows contacts table', () => {
  let page: AppPage;

  page = new AppPage();
  it('should show the contacts table', () => {
    let table = element(by.id('contactsTable'));
    expect(table.isPresent()).toBeTrue();
  });
});

describe('Enter page', () => {
  it('should show the contacts table', () => {
    browser.get('http://localhost:4200/');
    let table = element(by.id('contactsTable'));
    expect(table.isPresent()).toBeTrue();
  });
});

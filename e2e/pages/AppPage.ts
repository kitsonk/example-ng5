import Page from './Page';
import { By } from './locators';

export default class AppPage extends Page {
  protected _app = By.css('app-root[ng-version]');

  async load() {
    await super.load();
    await this.remote.get('output/dist/index.html');
    await this.waitForApp();
  }

  async getApp() {
    return this._find(this._app);
  }

  async getParagraphText() {
    return this.remote.findByCssSelector('app-root h1').getVisibleText();
  }

  async waitForApp() {
    return this._findDisplayed(this._app);
  }

}

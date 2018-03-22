const { describe, it, beforeEach } = intern.getPlugin('interface.bdd');
const { expect } = intern.getPlugin('chai');

import AppPage from './pages/AppPage';

describe('example-ng5 App', () => {
  let page: AppPage;

  beforeEach(({ remote }) => {
    page = new AppPage(remote);
  });

  it('should display welcome message', async () => {
    await page.load();
    expect(await page.getParagraphText()).to.equal('Welcome to app!');
  });
});

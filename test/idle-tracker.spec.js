const ip = require('ip');

describe('Idle tracker tests', () => {
  const server = `http://${ip.address()}:8080/test`;
  let page;

  before(async () => {
    page = await browser.newPage();
  });

  after(async () => {
    await page.close();
  });

  it('page should become inactive after timeout', async () => {
    await page.goto(`${server}/test-case-inactive.html`);
    await page.waitFor(1000);
    const isActive = await page.evaluate(() => window.isActive);
    expect(isActive).to.be.false;
  });

  it('page should become active after active events', async () => {
    await page.goto(`${server}/test-case-inactive.html`);
    await page.waitFor(1000);
    // mouse move
    await page.mouse.move(100, 100);
    const isActive = await page.evaluate(() => window.isActive);
    expect(isActive).to.be.true;
  });
});

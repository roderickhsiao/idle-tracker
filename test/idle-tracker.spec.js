describe('Idle tracker tests', function () {
  const server = `http://127.0.0.1:8080/test`;
  let page;

  before(async function () {
    page = await browser.newPage();
  });

  after(async function () {
    await page.close();
  });

  it('page should become inactive after timeout', async function (done) {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-case-inactive.html`);
    await page.waitFor(2000);
    expect(window.isActive).to.be(false);
    done();
  });
});

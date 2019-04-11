const puppeteer = require('puppeteer');
(async () => {
    /*
    // a trick to run headless with GPU enabled.
    //const browser = await puppeteer.launch({headless: false,args: ['--headless']});
    */
    const browser = await puppeteer.launch({headless: true});
    const sites = [
      "https://www.google.com",
      "https://www.youtube.com",
      "https://www.facebook.com",
      "https://www.google.pt",
      "https://www.sapo.pt",
      "https://www.wikipedia.org",
      "https://www.olx.pt",
      "https://www.instagram.com",
      "https://www.abola.pt"
    ];
    await Promise.all(
      sites.map(async site => {
        const context = await browser.createIncognitoBrowserContext();
        const page = await context.newPage();
        await page.goto(site, {waitUntil: 'networkidle2'});
        let cookies = await page._client.send('Network.getAllCookies');
        await console.log(cookies.cookies);
        await page.deleteCookie();
        await page.close();
      })
    );
    await browser.close();
})();

const puppeteer = require("puppeteer");
async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
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
      await page.goto(site);
      let cookies = await page.cookies();
      console.log(site);
      console.log(cookies);
      console.log("");
    })
  );
  browser.close();
}
run();

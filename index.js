const puppeteer = require("puppeteer");
async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let site = [
    'https://www.google.com',
    'https://www.youtube.com',
    'https://www.facebook.com',
    'https://www.google.pt',
    'https://www.sapo.pt',
    'https://www.wikipedia.org',
    'https://www.olx.pt',
    'https://www.instagram.com',
    'https://www.abola.pt'
  ];
  for (let i = 1; i < site.length; i++) {
    await page.goto(site[i]);
    let cookies = await page.cookies();
    console.log(site[i]);
    console.log(cookies);
    console.log("");
  }
  browser.close();
}
run();

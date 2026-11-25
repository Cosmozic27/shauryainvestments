import puppeteer from 'puppeteer-core';

const PORT = process.env.PORT || process.argv[2] || '3456';
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function testNavbar() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 1440, height: 900 }
  });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));

  // 1. Over Light Hero/Intro Section
  await page.evaluate(() => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));

  const lightLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('[data-nav-link]')).map(el => ({
      text: el.innerText.trim(),
      color: window.getComputedStyle(el).color
    }));
  });
  console.log('1. Over light section (BusinessIntro):', lightLinks[0].text, lightLinks[0].color);

  // 2. Over Dark Section (WhyChooseUs)
  await page.evaluate(() => {
    const el = document.getElementById('why-choose-us');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));

  const darkLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('[data-nav-link]')).map(el => ({
      text: el.innerText.trim(),
      color: window.getComputedStyle(el).color
    }));
  });
  console.log('2. Over dark section (WhyChooseUs):', darkLinks[0].text, darkLinks[0].color);

  // 3. Test Independent Split Contrast: Place a dark test zone under left 2 links only
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    // Inject a fixed contrast zone covering only the left 600px of the viewport at navY
    let zone = document.getElementById('test-split-zone');
    if (!zone) {
      zone = document.createElement('div');
      zone.id = 'test-split-zone';
      zone.setAttribute('data-contrast-zone', 'dark');
      zone.style.position = 'fixed';
      zone.style.top = '0px';
      zone.style.left = '0px';
      zone.style.width = '600px'; // Covers Home and About Us, but NOT Services, Loans, Mutual Funds, SIP, LIC
      zone.style.height = '100px';
      zone.style.zIndex = '1';
      zone.style.pointerEvents = 'none';
      document.body.appendChild(zone);
    }
    // Trigger scroll / contrast update
    window.dispatchEvent(new Event('scroll'));
  });
  await new Promise(r => setTimeout(r, 400));

  const splitLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('[data-nav-link]')).map(el => ({
      text: el.innerText.trim(),
      color: window.getComputedStyle(el).color
    }));
  });
  console.log('3. Split zone test (Left links over dark, right links over light):', splitLinks);

  // Cleanup test zone
  await page.evaluate(() => {
    const zone = document.getElementById('test-split-zone');
    if (zone) zone.remove();
    window.dispatchEvent(new Event('scroll'));
  });

  await browser.close();
  console.log('Navbar Independent Test completed!');
}

testNavbar().catch(console.error);

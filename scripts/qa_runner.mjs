import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:\\Users\\shaur\\.gemini\\antigravity\\brain\\171c95b8-e02e-4b0f-a1dc-3bf2e87c4142';
const LOCAL_QA_DIR = path.resolve('qa_screenshots');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || process.argv[2] || '3456';
const BASE_URL = `http://${HOST}:${PORT}`;

if (!fs.existsSync(LOCAL_QA_DIR)) {
  fs.mkdirSync(LOCAL_QA_DIR, { recursive: true });
}
if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function saveScreenshot(page, filename, clip = null) {
  const localPath = path.join(LOCAL_QA_DIR, filename);
  const artifactPath = path.join(ARTIFACT_DIR, filename);
  const options = clip ? { clip } : { fullPage: false };
  
  await page.screenshot({ path: localPath, ...options });
  try {
    fs.copyFileSync(localPath, artifactPath);
  } catch (err) {
    console.error('Failed copying to artifact dir:', err);
  }
  console.log(`Saved screenshot: ${filename}`);
}

async function runQA() {
  console.log('Launching Chrome for Architectural Hero Backgrounds QA...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();

  // ==========================================
  // DESKTOP HERO SCREENSHOTS (1440 x 900)
  // ==========================================
  console.log('\n--- 1. Capturing Desktop Hero Sections ---');

  // 1. HOMEPAGE HERO
  console.log(`Homepage: ${BASE_URL}/`);
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600)); // allow reveal animations to settle
  await saveScreenshot(page, 'hero_home_desktop.png', { x: 0, y: 0, width: 1440, height: 900 });
  await saveScreenshot(page, '01a_homepage_hero.png', { x: 0, y: 0, width: 1440, height: 900 });

  // 2. ABOUT PAGE HERO
  console.log(`About Page: ${BASE_URL}/about`);
  await page.goto(`${BASE_URL}/about`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_about_desktop.png', { x: 0, y: 0, width: 1440, height: 600 });
  await saveScreenshot(page, '02a_about_page_story.png', { x: 0, y: 0, width: 1440, height: 700 });

  // About extended section: Metrics & Experience
  console.log('Capturing About Metrics & Experience section...');
  await page.evaluate(() => {
    window.scrollBy(0, 750);
  });
  await new Promise(r => setTimeout(r, 600));
  await saveScreenshot(page, 'section_about_metrics.png', { x: 0, y: 0, width: 1440, height: 750 });
  await saveScreenshot(page, '02b_about_philosophy.png', { x: 0, y: 0, width: 1440, height: 750 });

  // 3. SERVICES PAGE HERO & BENTO
  console.log(`Services Page: ${BASE_URL}/services`);
  await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_services_desktop.png', { x: 0, y: 0, width: 1440, height: 600 });
  await saveScreenshot(page, '03_services_bento_grid.png', { x: 0, y: 0, width: 1440, height: 850 });

  // 4. LOANS PAGE HERO & EMI CALCULATOR
  console.log(`Loans Page: ${BASE_URL}/loans`);
  await page.goto(`${BASE_URL}/loans`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_loans_desktop.png', { x: 0, y: 0, width: 1440, height: 600 });
  await saveScreenshot(page, '04a_loans_page_hero.png', { x: 0, y: 0, width: 1440, height: 600 });

  // Loans: Categories
  await page.evaluate(() => {
    window.scrollBy(0, 700);
  });
  await new Promise(r => setTimeout(r, 600));
  await saveScreenshot(page, '04b_loans_categories.png', { x: 0, y: 0, width: 1440, height: 750 });

  // Loans: EMI Calculator Section
  console.log('Capturing Loans EMI Calculator section...');
  await page.evaluate(() => {
    const el = document.querySelector('input[type="range"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  await saveScreenshot(page, 'section_loans_emi.png');
  await saveScreenshot(page, '04c_loans_emi_calculator.png');

  // 5. MUTUAL FUNDS PAGE HERO
  console.log(`Mutual Funds Page: ${BASE_URL}/mutual-funds`);
  await page.goto(`${BASE_URL}/mutual-funds`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_mutual_funds_desktop.png', { x: 0, y: 0, width: 1440, height: 600 });
  await saveScreenshot(page, '05a_mutual_funds_hero.png', { x: 0, y: 0, width: 1440, height: 600 });

  // 6. SIP INVESTMENTS PAGE HERO & CALCULATOR
  console.log(`SIP Investments Page: ${BASE_URL}/sip-investments`);
  await page.goto(`${BASE_URL}/sip-investments`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_sip_desktop.png', { x: 0, y: 0, width: 1440, height: 600 });
  await saveScreenshot(page, '06a_sip_investments_hero.png', { x: 0, y: 0, width: 1440, height: 600 });

  // SIP Calculator Section
  console.log('Capturing SIP Calculator section...');
  await page.evaluate(() => {
    const el = document.querySelector('input[type="range"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  await saveScreenshot(page, 'section_sip_calculator.png');
  await saveScreenshot(page, '06b_sip_calculator.png');

  // 7. LIC INSURANCE PAGE HERO
  console.log(`LIC Insurance Page: ${BASE_URL}/lic-insurance`);
  await page.goto(`${BASE_URL}/lic-insurance`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_lic_desktop.png', { x: 0, y: 0, width: 1440, height: 600 });
  await saveScreenshot(page, '07a_lic_insurance_hero.png', { x: 0, y: 0, width: 1440, height: 600 });

  // ==========================================
  // MOBILE VIEWPORT SCREENSHOTS (390 x 844)
  // ==========================================
  console.log('\n--- 2. Capturing Mobile Viewports (390 x 844) ---');
  await page.setViewport({ width: 390, height: 844 });

  // 1. Mobile Homepage Hero
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_home_mobile.png', { x: 0, y: 0, width: 390, height: 844 });
  await saveScreenshot(page, '09a_mobile_homepage.png', { x: 0, y: 0, width: 390, height: 844 });

  // Mobile drawer
  const menuBtn = await page.$('button[aria-label="Open navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 500));
    await saveScreenshot(page, '09b_mobile_drawer_open.png');
    // Close menu
    const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 2. Mobile About Hero
  await page.goto(`${BASE_URL}/about`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_about_mobile.png', { x: 0, y: 0, width: 390, height: 550 });

  // 3. Mobile Services Hero
  await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_services_mobile.png', { x: 0, y: 0, width: 390, height: 550 });

  // 4. Mobile Loans Hero
  await page.goto(`${BASE_URL}/loans`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_loans_mobile.png', { x: 0, y: 0, width: 390, height: 550 });

  // 5. Mobile Mutual Funds Hero
  await page.goto(`${BASE_URL}/mutual-funds`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_mutual_funds_mobile.png', { x: 0, y: 0, width: 390, height: 550 });

  // 6. Mobile SIP Hero
  await page.goto(`${BASE_URL}/sip-investments`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_sip_mobile.png', { x: 0, y: 0, width: 390, height: 550 });

  // 7. Mobile LIC Hero
  await page.goto(`${BASE_URL}/lic-insurance`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));
  await saveScreenshot(page, 'hero_lic_mobile.png', { x: 0, y: 0, width: 390, height: 550 });

  await browser.close();
  console.log('\nAll desktop and mobile hero screenshots captured successfully!');
}

runQA().catch(err => {
  console.error('QA Runner error:', err);
  process.exit(1);
});

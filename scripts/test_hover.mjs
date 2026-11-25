import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || process.argv[2] || '3456';
const BASE_URL = `http://127.0.0.1:${PORT}`;
const ARTIFACT_DIR = 'C:\\Users\\shaur\\.gemini\\antigravity\\brain\\171c95b8-e02e-4b0f-a1dc-3bf2e87c4142';
const LOCAL_QA_DIR = path.resolve('qa_screenshots');

async function testHover() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 1440, height: 900 }
  });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2600));

  // 1. Dark Glass Card Hover Test
  const darkCard = await page.$('.card-glass-dark');
  if (darkCard) {
    await darkCard.evaluate(el => el.scrollIntoView({ block: 'center' }));
    await new Promise(r => setTimeout(r, 400));
    const box = await darkCard.boundingBox();

    const beforeDark = await page.evaluate(el => ({
      border: window.getComputedStyle(el).borderColor,
      bg: window.getComputedStyle(el).backgroundColor,
      shadow: window.getComputedStyle(el).boxShadow,
    }), darkCard);
    console.log('Dark Card Before hover:', beforeDark);

    // Capture default
    await page.mouse.move(0, 0);
    await new Promise(r => setTimeout(r, 400));
    const defPath = path.join(LOCAL_QA_DIR, '08a_dark_card_default.png');
    await page.screenshot({ path: defPath, clip: box });
    fs.copyFileSync(defPath, path.join(ARTIFACT_DIR, '08a_dark_card_default.png'));

    // Move mouse over
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await new Promise(r => setTimeout(r, 500));

    const afterDark = await page.evaluate(el => ({
      border: window.getComputedStyle(el).borderColor,
      bg: window.getComputedStyle(el).backgroundColor,
      shadow: window.getComputedStyle(el).boxShadow,
      filter: window.getComputedStyle(el).backdropFilter
    }), darkCard);
    console.log('Dark Card After hover:', afterDark);

    const hovPath = path.join(LOCAL_QA_DIR, '08b_dark_card_hovered.png');
    await page.screenshot({ path: hovPath, clip: box });
    fs.copyFileSync(hovPath, path.join(ARTIFACT_DIR, '08b_dark_card_hovered.png'));
  }

  // 2. Light Glass Card Hover Test
  const lightCard = await page.$('.card-glass-light');
  if (lightCard) {
    await lightCard.evaluate(el => el.scrollIntoView({ block: 'center' }));
    await new Promise(r => setTimeout(r, 400));
    const box = await lightCard.boundingBox();

    const beforeLight = await page.evaluate(el => ({
      border: window.getComputedStyle(el).borderColor,
      bg: window.getComputedStyle(el).backgroundColor,
      shadow: window.getComputedStyle(el).boxShadow,
    }), lightCard);
    console.log('Light Card Before hover:', beforeLight);

    // Capture default
    await page.mouse.move(0, 0);
    await new Promise(r => setTimeout(r, 400));
    const defPathLight = path.join(LOCAL_QA_DIR, '08c_light_card_default.png');
    await page.screenshot({ path: defPathLight, clip: box });
    fs.copyFileSync(defPathLight, path.join(ARTIFACT_DIR, '08c_light_card_default.png'));

    // Move mouse over
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await new Promise(r => setTimeout(r, 500));

    const afterLight = await page.evaluate(el => ({
      border: window.getComputedStyle(el).borderColor,
      bg: window.getComputedStyle(el).backgroundColor,
      shadow: window.getComputedStyle(el).boxShadow,
      filter: window.getComputedStyle(el).backdropFilter
    }), lightCard);
    console.log('Light Card After hover:', afterLight);

    const hovPathLight = path.join(LOCAL_QA_DIR, '08d_light_card_hovered.png');
    await page.screenshot({ path: hovPathLight, clip: box });
    fs.copyFileSync(hovPathLight, path.join(ARTIFACT_DIR, '08d_light_card_hovered.png'));
  }

  await browser.close();
  console.log('testHover completed successfully for both dark and light cards!');
}

testHover().catch(console.error);

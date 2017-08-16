import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

it('Visual regression test', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const screenshot = await page.screenshot();

  expect(screenshot).toMatchImageSnapshot({
    customDiffConfig: {
      thresholdType: 'pixel',
      threshold: 1
    }
  });

  browser.close();
});

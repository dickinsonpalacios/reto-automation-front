import { Before,After,Status,setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, selectors } from '@playwright/test';
import { CustomWorld } from '../fixtures/world';

selectors.setTestIdAttribute('data-test');
setDefaultTimeout(30 * 1000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  try {
    if (scenario.result?.status === Status.FAILED && this.page) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await this.attach(screenshot, 'image/png');
    }
  } finally {
    await this.context?.close();
    await this.browser?.close();
  }
});
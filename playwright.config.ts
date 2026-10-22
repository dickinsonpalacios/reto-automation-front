import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test/',

  fullyParallel: true,

  use: {
    trace: 'on-first-retry',

    testIdAttribute: 'data-test'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ],
});

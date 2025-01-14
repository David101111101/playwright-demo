import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: false, // Run tests in headed mode
    launchOptions: { 
        slowMo: 1000,      // Slow down Playwright operations by 1 second
        }, 
        trace: 'on-first-retry', // Enable trace for debugging
  },
  
});

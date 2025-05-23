
Step 1 to install, the extension
Step 2 in search bar type >install Playwright


--browser=chromium 
--browser=firefox 
--browser=webkit

Users Must have NodeJs installed : https://nodejs.org/es



Ecommerce end to end Test FIle:
ecommercePurchase.spec.ts


API:
npm run test:api


Debug:
npm run test:debug

To activate tracing tests:
npx playwright test ecommercePurchase --trace on

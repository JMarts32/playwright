import {test, expect} from '@playwright/test'

test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
      // Open the url.
      await page.goto('https://practice.automationbro.com/');

      // get the title of the url
      await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    })

    test('Open AboutPage and verify title', async ({ page }) => {
        // Open the url
        await page.goto('https://practice.automationbro.com/about/');

        // verify the title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click get started button', async ({ page }) => {
      // Open the url 
      await page.goto('https://practice.automationbro.com');

      // Locate the button and click it
      page.locator('#get-started').click();

      // verify the url
      await expect(page).toHaveURL('https://practice.automationbro.com/#get-started');
    })

    test('Verify heading text is visible using text selector', async ({ page }) => {
      // Open the url
      await page.goto('https://practice.automationbro.com');

      // find the text using locator
      const heading_test = await page.locator('text=Think different. Make different.');

      //verify that the text is visible
      await expect(heading_test).toBeVisible();
    })
    
    
})

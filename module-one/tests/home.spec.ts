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

        //verify the title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
    
})

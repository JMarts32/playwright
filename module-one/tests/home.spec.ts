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
      const heading_test = page.locator('text=Think different. Make different.');

      //verify that the text is visible
      await expect(heading_test).toBeVisible();
    })
    
    test('Verify my home link is enebaled using text and css selector', async ({ page }) => {
      // Open the url 
      await page.goto('https://practice.automationbro.com');

      // find the home that we want
      const homeText = page.locator('#zak-primary-menu >> text=Home');

      // verify home text is enebale
      await expect(homeText).toBeEnabled();   
    })

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
      // Open the url
      await page.goto('https://practice.automationbro.com');

      // find the serach icon
      const searchIcon = page.locator('//*[@id="zak-masthead"]//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-action zak-header-search"]//*[@class="zak-header-search__toggle"]//*[@class="zak-icon zakra-icon--magnifying-glass"]');

      // verify that the icon is visible
      await expect(searchIcon).toBeVisible();
    })
    
    test('Verify the text for all nav links', async ({ page }) => {
      // Open the url
      await page.goto('https://practice.automationbro.com')

      const expectedLinks = ["Home", "About", "Shop", "Blog", "Contact", "My account"];

      // locate the menu items
      const navLinks = page.locator('#zak-primary-menu li[id*=menu]');

      // veruify the navLinks
      expect(await navLinks.allTextContents()).toEqual(expectedLinks); 
    })

    test('Fill the form to submit it and verify the message', async ({ page }) => {
      // Open the url
      await page.goto('https://practice.automationbro.com/contact/');

      // fill the form and submit it
      await page.locator('#evf-277-field_ys0GeZISRs-1-container input').fill('juan');
      await page.locator('#evf-277-field_LbH5NxasXM-2-container input').fill('test@mail.com');
      await page.locator('#evf-277-field_66FR384cge-3-container input').fill('3147598091');
      await page.locator('#evf-277-field_yhGx3FOwr2-4-container textarea').fill('This is a test message pls work bruh');
      // submit it
      await page.locator('#evf-submit-277').click();

      // locate the success message
      const finalText = page.locator('div[role="alert"]'); 

      // Verify the message is visible
      await expect(finalText).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
    
    test('Blog Excercise', async ({ page }) => {
      // Open the url
      await page.goto('https://practice.automationbro.com/blog/');

      // Locate the recent posts
      const recentPostsText = page.locator('#recent-posts-3 ul li')

      // Verifies that the titles are at least 10 characters long
      for (const element of await recentPostsText.allTextContents()) {
        expect(element.length).toBeGreaterThan(9);
      }
      //Verifies that there are 5 recent posts
      await expect(recentPostsText.count()).toEqual(5);
    })
})

import {test, expect} from '@playwright/test'
const path = require('path');

test.describe('', () => {
    test('should upload a test file', async ({ page }) => {
        // Open the url
        await page.goto('https://practice.automationbro.com/cart');

        // provide the test file path
        const filepath =  path.join(__dirname, '../data/Luna1.jpg'); 

        // upload the test file
        await page.setInputFiles('input#upfile_1', filepath);

        // click the submit button
        page.locator('#upload_1').click();

        //wait for the element to be fully charged
        await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state: 'visible', timeout: 10000});

        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully')
    })
    
})

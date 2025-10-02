/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePages"
import { RegistrationPage } from "../pages/RegistrationPages"
import { RandomDataUtil } from "../utils/randomDataGenerator"
import { TestConfig } from "../test.config"

let homepage: HomePage;
let registartionpage: RegistrationPage;
let config: TestConfig;
test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl); //Navigate to url application
    homepage = new HomePage(page);
    registartionpage = new RegistrationPage(page);
})
test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})
test('user registartion test', async () => {


    //Go to 'My Account' and click 'Register'
    await homepage.clickMyAccount();
    await homepage.clickRegister();

    await registartionpage.setFirstName(RandomDataUtil.getFirstName());
    await registartionpage.setLastName(RandomDataUtil.getLastName());
    await registartionpage.setEmail(RandomDataUtil.getEmail());
    await registartionpage.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registartionpage.setPassword(password);
    await registartionpage.setConfirmPassword(password);
    await registartionpage.setPrivacyPolicy();
    await registartionpage.clickContinue()

    //Validate the confirmation message
    const ConfirmationMsg = await registartionpage.getConfirmationMsg();
    expect(ConfirmationMsg).toContain('Your Account Has Been Created!')


})
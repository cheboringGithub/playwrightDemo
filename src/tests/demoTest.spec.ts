import {test} from "@playwright/test";
import {PlaywrightDemoPage} from "../pages/playwrightDemoPage";

test.describe('Demo suite', () => {

    test('Demo test1', async ({page}) => {
        const playwrightDemoPage = new PlaywrightDemoPage(page);
        await playwrightDemoPage.navigate('https://playwright.dev/docs/pom');
        await playwrightDemoPage.typeInSearchInput('SOSI');
        await page.waitForTimeout(5000);
    });
});
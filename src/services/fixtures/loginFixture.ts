import {test as base} from '@playwright/test';
import {BasePage} from '../../pages/basePage';
import {Response} from 'playwright-core';

type TestFixtures = {
    login: null|Response
}

const test = base.extend<TestFixtures>({
    async login ({ page }, use) {
        await use(await new BasePage(page).navigate('https://playwright.dev/docs/test-fixtures'));
    },
});

export default test;
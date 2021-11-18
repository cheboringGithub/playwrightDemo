/* TODO:
            -Add Test Step As Decorator
            -Add Dependencies
            -Add Actions,
            -Add Element Handler
            -Add Base page,
            -Add API Calls,
            -Add Screenshots on fail
            -Add Readme
            -Add Rim-Raf
            -Add Linter
            -Add Husky
            -Add Allure reporter
            -Add logger
            -Add Docker Image
            -Add routing
            -CI Integration
            -Testrail Integration
            -Rename Element Handler
            -Add Request Interceptors
*/
import { PlaywrightTestConfig } from '@playwright/test';

const playWrightConfig: PlaywrightTestConfig = {
    use: {
        screenshot: 'only-on-failure',
        headless: false,
        viewport: {
            width: 1280,
            height: 720
        },
        ignoreHTTPSErrors: true,
        video: 'off',
    },
    reporter: 'allure-playwright'
};
export default playWrightConfig;
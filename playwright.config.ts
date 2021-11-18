/* TODO:    -Add Linter
            -Add Husky
            -Add Allure reporter
            -Add logger
            -Add Docker Image
            -Add routing
            -CI Integration
            -Testrail Integration
            -Rename Element Handler
*/
import { PlaywrightTestConfig } from '@playwright/test';

const playWrightConfig: PlaywrightTestConfig = {
    use: {
        headless: false,
        viewport: {
            width: 1280,
            height: 720
        },
        ignoreHTTPSErrors: true,
        video: 'off',
    },
    reporter: "line"
};
export default playWrightConfig;
import test, {Page} from '@playwright/test';
import {ElementHandler} from '../helpers/elementHandler';

export class BasePage {
    protected readonly page: Page;
    protected readonly elementHandler: ElementHandler;

    constructor(page: Page) {
        this.page = page;
        this.elementHandler = new ElementHandler(this.page);
    }

    public async navigate(url: string): Promise<void> {
        await test.step(`Navigate to URL: ${url}`, async () => {
            await this.page.goto(url);
        });
    }
}
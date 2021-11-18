import {Page} from '@playwright/test';
import {Locator} from 'playwright';

export interface IElement extends Locator{
    description: string;
}

export class ElementHandler {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public getLocator(selector: string, description: string): IElement {
        const locator = this.page.locator(selector) as IElement;
        locator.description = description;
        return locator;
    }
}
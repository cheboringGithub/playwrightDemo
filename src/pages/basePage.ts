import {Response} from "playwright-core";
import {Page} from "@playwright/test";
import {ElementHandler} from "../helpers/elementHandler";



export class BasePage {
    protected readonly page: Page;
    protected readonly elementHandler: ElementHandler;

    constructor(page: Page) {
        this.page = page;
        this.elementHandler = new ElementHandler(this.page);
    }

    public async navigate(url: string): Promise<null|Response> {
        return await this.page.goto(url);
    }
}
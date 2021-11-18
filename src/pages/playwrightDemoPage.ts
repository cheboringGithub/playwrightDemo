import {BasePage} from './basePage';
import {Page} from '@playwright/test';
import {Actions} from '../helpers/actions';
import {IElement} from '../helpers/elementHandler';

export class PlaywrightDemoPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private searchInput: IElement = this.elementHandler.getLocator('input[placeholder]', 'Search Input');

    public async typeInSearchInput(text: string): Promise<void>{
        await Actions.type(this.searchInput, text);
    }
}
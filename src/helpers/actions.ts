import {IElement} from "../pages/basePage";
import test from "../services/fixtures/loginFixture";

interface typeOptions {
    force?: boolean,
    noWaitAfter?: boolean,
    timeout?: number
}

export class Actions {
    public static async click(element: IElement): Promise<void> {
        await test.step(`Click on: "${element.description}" Element`, async () => {
            await element.click();
        })
    }

    public static async type(element: IElement, text: string, options?: typeOptions): Promise<void> {
        await test.step(`Type text: "${text}" to "${element.description}" Element`, async () => {
           await element.fill(text, options)
        });
    }
}
import { expect, type Locator, type Page } from "@playwright/test";

export class CheckboxPage {
  readonly homeCheckbox: Locator;
  readonly confirmation: Locator;

  constructor(private readonly page: Page) {
    this.homeCheckbox = page.getByRole("checkbox", { name: "Select Home" });
    this.confirmation = page.locator("#result");
  }

  async checkHome(): Promise<void> {
    await this.homeCheckbox.check();
    await expect(this.homeCheckbox).toBeChecked();
  }
}

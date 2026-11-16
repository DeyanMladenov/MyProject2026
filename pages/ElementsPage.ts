import { expect, type Locator, type Page } from "@playwright/test";

export class ElementsPage {
  readonly checkboxLink: Locator;

  constructor(private readonly page: Page) {
    this.checkboxLink = page.getByRole("link", { name: "Check Box" });
  }

  async openCheckbox(): Promise<void> {
    await this.checkboxLink.click();
    await expect(this.page).toHaveURL(/\/checkbox$/);
  }
}

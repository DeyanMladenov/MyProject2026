import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly elementsLink: Locator;

  constructor(private readonly page: Page) {
    this.elementsLink = page.getByRole("link", { name: "Elements" });
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
    await expect(this.elementsLink).toBeVisible();
  }

  async openElements(): Promise<void> {
    await this.elementsLink.click();
    await expect(this.page).toHaveURL(/\/elements$/);
  }
}

import { expect, type Locator, type Page } from "@playwright/test";

export class DroppablePage {
  readonly acceptable: Locator;
  readonly acceptDropTarget: Locator;

  constructor(private readonly page: Page) {
    this.acceptable = page.locator("#acceptable");
    this.acceptDropTarget = page.locator("#acceptDropContainer .drop-box");
  }

  async openAcceptTab(): Promise<void> {
    await this.page.goto("/interaction");
    await this.page.getByRole("link", { name: "Droppable" }).click();
    await expect(this.page).toHaveURL(/\/droppable$/);
    await this.page.getByRole("tab", { name: "Accept" }).click();
    await expect(this.acceptable).toBeVisible();
    await expect(this.acceptDropTarget).toBeVisible();
    await expect(this.acceptable).toHaveClass(/ui-draggable/);
    await expect(this.acceptDropTarget).toHaveClass(/ui-droppable/);
  }

  async dropAcceptable(): Promise<void> {
    await this.acceptable.dragTo(this.acceptDropTarget);
  }
}

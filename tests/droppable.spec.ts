import { expect, test } from "@playwright/test";
import { DroppablePage } from "../pages/DroppablePage";

test("accepts the Acceptable draggable and highlights the drop target", async ({ page }) => {
  const droppablePage = new DroppablePage(page);

  await droppablePage.openAcceptTab();
  await droppablePage.dropAcceptable();

  await expect(droppablePage.acceptDropTarget).toHaveText("Dropped!");
  await expect(droppablePage.acceptDropTarget).toHaveCSS("background-color", "rgb(70, 130, 180)");
});

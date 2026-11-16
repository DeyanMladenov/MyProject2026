import { expect, test } from "@playwright/test";
import { CheckboxPage } from "../pages/CheckboxPage";
import { ElementsPage } from "../pages/ElementsPage";
import { HomePage } from "../pages/HomePage";

test("selects Home and displays the selection confirmation", async ({ page }) => {
  const homePage = new HomePage(page);
  const elementsPage = new ElementsPage(page);
  const checkboxPage = new CheckboxPage(page);

  await homePage.goto();
  await homePage.openElements();
  await elementsPage.openCheckbox();
  await checkboxPage.checkHome();

  await expect(checkboxPage.confirmation).toHaveText(/^You have selected :\s*home/);
});

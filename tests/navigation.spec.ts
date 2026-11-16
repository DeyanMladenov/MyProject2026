import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("opens the DemoQA website", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await expect(page).toHaveURL("https://demoqa.com/");
  await expect(page).toHaveTitle("demosite");
});

import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { checkHttpUrl } from "./utils";
import AxeBuilder from "@axe-core/playwright";

const { Given, When, Then } = createBdd();

Given("I have an open browser", () => {
  // Browser is automatically opened by Playwright test context
  // This step serves as a semantic placeholder for BDD readability
  return;
});

When("I navigate to {string}", async ({ page }, url) => {
  expect(checkHttpUrl(url)).toBeTruthy();
  const response = await page.goto(url);
  expect(response?.ok()).toBe(true);
});

Then("I see {string} in the title", async ({ page }, keyword) => {
  const escapedKeyword = keyword.replaceAll(
    /[.*+?^${}()|[\]\\]/g,
    String.raw`\$&`,
  );
  await expect(page).toHaveTitle(new RegExp(escapedKeyword), { timeout: 4500 });
});

Then("I have no problems navigating the site", async ({ page }) => {
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

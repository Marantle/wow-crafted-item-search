import { test, expect } from "@playwright/test";

test.describe("Favorites Functionality (Mobile)", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="page-title"]');
  });

  test("can add favorites and view them on favorites page", async ({
    page,
  }) => {
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    const totalRecipes = await recipeCards.count();
    expect(totalRecipes, "There should be at least one recipe").toBeGreaterThan(
      0
    );

    const favoritedRecipes: string[] = [];

    for (let i = 0; i < Math.min(2, totalRecipes); i++) {
      const card = recipeCards.nth(i);
      await card.scrollIntoViewIfNeeded();

      const favoriteButton = card.locator('[data-testid="favorite-button"]');
      const recipeNameElement = card.locator('[data-testid="recipe-name"]');

      await expect(recipeNameElement).toBeVisible();
      const recipeName = await recipeNameElement.textContent();
      expect(recipeName).toBeTruthy();

      await favoriteButton.click();

      // Check the aria-label of the button
      await expect(favoriteButton).toHaveAttribute(
        "aria-label",
        "Remove from favorites"
      );

      favoritedRecipes.push(recipeName!);
    }

    const favoritesLink = page.locator('[data-testid="favorites-link"]');
    await favoritesLink.click();
    await expect(page).toHaveURL(/\/favorites/);

    const favoritedRecipeCards = page.locator('[data-testid="recipe-card"]');
    await expect(favoritedRecipeCards).toHaveCount(favoritedRecipes.length);

    for (const recipeName of favoritedRecipes) {
      const card = favoritedRecipeCards.filter({ hasText: recipeName }).first();
      await card.scrollIntoViewIfNeeded();
      await expect(card).toBeVisible();
    }
  });

  test("can remove favorites from the favorites page", async ({ page }) => {
    // Add a favorite first
    await page.goto("/", { waitUntil: "networkidle" });
    const firstRecipe = page.locator('[data-testid="recipe-card"]').first();
    const favoriteButton = firstRecipe.locator(
      '[data-testid="favorite-button"]'
    );
    await favoriteButton.click();
    await expect(favoriteButton).toHaveAttribute(
      "aria-label",
      "Remove from favorites"
    );

    // Store the recipe name
    const recipeNameElement = firstRecipe.locator(
      '[data-testid="recipe-name"]'
    );
    const recipeName = await recipeNameElement.textContent();
    expect(recipeName).toBeTruthy();

    // Navigate to favorites page
    const favoritesLink = page.locator('[data-testid="favorites-link"]');
    await favoritesLink.click();
    await expect(page).toHaveURL(/\/favorites/);

    const favoritedRecipes = page.locator('[data-testid="recipe-card"]');
    const initialFavoritesCount = await favoritedRecipes.count();
    expect(initialFavoritesCount).toBeGreaterThan(0);

    const firstFavorite = favoritedRecipes.first();
    await firstFavorite.scrollIntoViewIfNeeded();
    const removeFavoriteButton = firstFavorite.locator(
      '[data-testid="favorite-button"]'
    );
    await removeFavoriteButton.click();

    // Verify that the recipe card is removed from the favorites page
    await expect(favoritedRecipes).toHaveCount(initialFavoritesCount - 1);

    // Navigate back to the home page and verify it's not favorited
    const backToSearchButton = page.locator('[data-testid="back-to-search"]');
    await backToSearchButton.click();

    // Wait for navigation to complete
    await page.waitForURL("/", { timeout: 10000 });

    // Verify we're back on the home page
    expect(page.url()).toBe("http://localhost:3000/");

    // Wait for the recipe cards to be visible
    await page.waitForSelector('[data-testid="recipe-card"]', {
      state: "visible",
      timeout: 10000,
    });

    // Find the removed favorite without scrolling
    const removedFavorite = page
      .locator('[data-testid="recipe-card"]', { hasText: recipeName! })
      .first();

    // Wait for the removed favorite to be visible
    await expect(removedFavorite).toBeVisible({ timeout: 10000 });

    const removedFavoriteButton = removedFavorite.locator(
      '[data-testid="favorite-button"]'
    );

    // Check the aria-label of the button
    await expect(removedFavoriteButton).toHaveAttribute(
      "aria-label",
      "Add to favorites"
    );
  });
  
  test("favorites persist after page reload", async ({ page }) => {
    const recipeCards = page.locator('[data-testid="recipe-card"]');
    const firstCard = recipeCards.first();
    await firstCard.scrollIntoViewIfNeeded();
    const favoriteButton = firstCard.locator('[data-testid="favorite-button"]');
    const recipeNameElement = firstCard.locator('[data-testid="recipe-name"]');

    const recipeName = await recipeNameElement.textContent();
    expect(recipeName).toBeTruthy();

    await favoriteButton.click();
    await expect(favoriteButton).toHaveAttribute(
      "aria-label",
      "Remove from favorites"
    );

    // Reload the page
    await page.reload({ waitUntil: "networkidle" });

    // Check if the button still indicates it's favorited
    await firstCard.scrollIntoViewIfNeeded();
    await expect(favoriteButton).toHaveAttribute(
      "aria-label",
      "Remove from favorites"
    );

    // Navigate to the favorites page
    const favoritesLink = page.locator('[data-testid="favorites-link"]');
    await favoritesLink.click();
    await expect(page).toHaveURL(/\/favorites/);

    // Verify the favorited recipe is on the favorites page
    const favoritedRecipeOnFavoritesPage = page
      .locator('[data-testid="recipe-card"]', { hasText: recipeName! })
      .first();
    await favoritedRecipeOnFavoritesPage.scrollIntoViewIfNeeded();
    await expect(favoritedRecipeOnFavoritesPage).toBeVisible();
  });
});

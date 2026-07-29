const { test, expect } = require('@playwright/test');

test('Book Flats website loads successfully', async ({ page }) => {

    await page.goto('http://book-flats-server/index.html');

    await expect(page).toHaveTitle(/Book Flats/i);

    await expect(page.locator('html')).toBeVisible();

    await expect(page.locator('body')).toBeVisible();

});


test('CSS is loaded', async ({ page }) => {

    await page.goto('http://book-flats-server/index.html');

    const stylesheets = await page.locator('link[rel="stylesheet"]').count();

    expect(stylesheets).toBeGreaterThan(0);

});


test('Images load correctly', async ({ page }) => {

    await page.goto('http://book-flats-server/index.html');

    const images = page.locator('img');

    const count = await images.count();

    for (let i = 0; i < count; i++) {
        await expect(images.nth(i)).toHaveJSProperty('complete', true);
    }

});
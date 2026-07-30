const { test, expect } = require('@playwright/test');

test('Book Flats website loads successfully', async ({ page }) => {

    await page.goto('http://host.docker.internal:8000/index.html');

    await expect(page).toHaveTitle(/.*/);

    await expect(
        page.getByText('Sunrise Avenue').first()
    ).toBeVisible();

});
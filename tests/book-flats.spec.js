//book-flats.spec.js
const { test, expect } = require('@playwright/test');

test('Book Flats website loads successfully', async ({ page }) => {
    await page.goto('http://host.docker.internal:8000/index.html');

    await expect(
        page.getByText('Sunrise Avenue').first()
    ).toBeVisible();
});

test('Book Flat button is visible', async ({ page }) => {
    await page.goto('http://host.docker.internal:8000/index.html');

    const button = page.getByRole('button', { name: 'Book Flat' });

    await expect(button).toBeVisible();
});

test('Book Flat button opens flats section', async ({ page }) => {
    await page.goto('http://host.docker.internal:8000/index.html');

    await page.getByRole('button', { name: 'Book Flat' }).click();

    await expect(
        page.getByText('3BHK Flat')
    ).toBeVisible();
});
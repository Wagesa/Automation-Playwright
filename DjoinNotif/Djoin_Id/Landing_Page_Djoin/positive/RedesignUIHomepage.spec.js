import { test, expect } from '@playwright/test';

test('Pengujian Penyesuaian Redesign UI Homepage pada Website Djoin.id', async ({ page }) => {

    // Buka Halaman
    await page.goto('https://djoin-web.solusisakti.xyz/home');
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/djoin-web.solusisakti.xyz/);
    await expect(page).toHaveTitle(/Beranda - Djoin/);


    await page.waitForTimeout(5000);
});

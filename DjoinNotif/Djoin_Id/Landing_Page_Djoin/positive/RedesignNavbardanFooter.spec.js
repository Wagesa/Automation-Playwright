import { test, expect } from '@playwright/test';

test('Pengujian Redesign Navbar & Footer pada Website Djoin.id', async ({ page }) => {

    // Buka Halaman
    await page.goto('https://djoin-web.solusisakti.xyz/home');
    
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/djoin-web.solusisakti.xyz/);
    await expect(page).toHaveTitle(/Beranda - Djoin/);
    await expect(page.getByText('Beranda Layanan Harga Berita Hubungi Kami Coba Gratis')).toBeVisible();
    await expect(page.getByRole('contentinfo').locator('div').getByText('© Copyright 2023 PT Solusi Anak Sakti')).toBeVisible();

    await page.waitForTimeout(5000);
});

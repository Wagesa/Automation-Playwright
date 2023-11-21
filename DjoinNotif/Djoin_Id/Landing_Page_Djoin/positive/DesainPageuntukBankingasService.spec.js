import { test, expect } from '@playwright/test';

test('Pengujian Penyesuaian Desain Page untuk Bangking as Service pada Website Djoin.id', async ({ page }) => {

    // Buka Halaman
    await page.goto('https://djoin-web.solusisakti.xyz/home');
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/djoin-web.solusisakti.xyz/);
    await expect(page).toHaveTitle(/Beranda - Djoin/);
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Layanan' }).click();
    await page.getByRole('link', { name: 'Banking as a Service Ekosistem pendukung untuk mengoptimalkan koperasi anda' }).click();
    await expect(page).toHaveURL(/banking-as-a-service/);
    await expect(page).toHaveTitle(/Sistem manajemen core-banking Koperasi - Djoin/);

    await page.waitForTimeout(5000);
});

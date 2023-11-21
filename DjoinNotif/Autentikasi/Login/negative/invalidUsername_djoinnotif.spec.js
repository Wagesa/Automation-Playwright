import { test, expect } from '@playwright/test';

// invalid username dikarenakan tidak menginputkan username
test('InvalidUsername DjoinNotif', async ({ page }) => {
    // Buka halaman utama
    await page.goto('https://djoin-notif-test.solusisakti.xyz/');

    // Verifikasi URL dan judul halaman
    await expect(page).toHaveURL(/djoin-notif-test.solusisakti.xyz/);
    await expect(page).toHaveTitle(/Home/);

    // Melakukan login
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByPlaceholder('Masukkan email/no handphone anda').click();
    await page.getByRole('button', { name: 'Lanjutkan' }).click()


    // Menunggu waktu yang cukup untuk menanggapi hasil login
    await page.waitForTimeout(5000);

    // Klik tombol 'Ok'
    await page.getByRole('button', { name: 'Ok' }).click();

    // Verifikasi
    await expect(page).toHaveTitle(/Login/);

    await page.waitForTimeout(5000);
});
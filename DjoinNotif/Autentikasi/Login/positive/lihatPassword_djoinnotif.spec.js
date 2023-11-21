import { test, expect } from '@playwright/test';

// Deklarasi pengujian dengan nama 'Login DjoinNotif'
test('LihatPassword DjoinNotif', async ({ page }) => {
    // Buka halaman utama
    await page.goto('https://djoin-notif-test.solusisakti.xyz/');

    // Verifikasi URL dan judul halaman
    await expect(page).toHaveURL(/djoin-notif-test.solusisakti.xyz/);
    await expect(page).toHaveTitle(/Home/);

    // Melakukan login
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByPlaceholder('Masukkan kata sandi anda').fill('pinjamduluseratus');
    await page.getByLabel('appended action').click();

    // Menunggu sebentar agar password terbaca (anda bisa menyesuaikan waktu ini)
    await page.waitForTimeout(3000);

    // Menggunakan locator untuk mendapatkan elemen yang mungkin mengandung password
    const showPasswordInputHandle = await page.locator('.v-input--is-label-active input[name="showPassword"]').elementHandles();

    // Log properties dan methods dari elemen
    console.log(await showPasswordInputHandle[0]);

    // Waktu Tunggu
    await page.waitForTimeout(5000);
});
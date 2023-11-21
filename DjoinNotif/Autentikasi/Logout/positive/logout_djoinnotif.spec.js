import { test, expect } from '@playwright/test';

// Deklarasi pengujian dengan nama 'Logout DjoinNotif'
test('Logout DjoinNotif', async ({ page }) => {
    // Buka halaman utama
    await page.goto('https://djoin-notif-test.solusisakti.xyz/');

    // Verifikasi URL dan judul halaman
    await expect(page).toHaveURL(/djoin-notif-test.solusisakti.xyz/);
    await expect(page).toHaveTitle(/Home/);

    await page.waitForTimeout(5000)
    // Melakukan login
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByPlaceholder('Masukkan email/no handphone anda').fill('081236654144');
    await page.getByPlaceholder('Masukkan kata sandi anda').fill('pinjamduluseratus');
    await page.getByLabel('appended action').click();
    await page.getByRole('button', { name: 'Lanjutkan' }).click();
    await page.getByRole('button', { name: 'user avatar Prof.DR.Ir.A.A.Bagus Simalakama...' }).click();

    // Verifikasi tampilan avatar pengguna
    await expect(page.getByRole('button', { name: 'user avatar Prof.DR.Ir.A.A.Bagus Simalakama...' })).toBeVisible();

    // Klik tombol 'Keluar' dan 'Logout'
    await page.getByText('Keluar').click();
    await page.getByRole('button', { name: 'Logout' }).click();

    // Verifikasi judul halaman setelah logout
    await expect(page).toHaveTitle(/Login/);

    // Waktu Tunggu
    await page.waitForTimeout(5000);
});

// Dalam pengujian ini, langkah-langkah yang dibutuhkan untuk logout setelah login telah digabungkan ke dalam satu blok pengujian. Seperti sebelumnya, pastikan bahwa kode ini sesuai dengan alur kerja dan elemen UI yang benar untuk aplikasi Anda.
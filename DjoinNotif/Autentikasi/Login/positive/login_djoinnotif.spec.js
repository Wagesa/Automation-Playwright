import { test, expect, selectors } from '@playwright/test';

// Deklarasi pengujian dengan nama 'Login DjoinNotif'
test('Login DjoinNotif', async ({ page }) => {
    // Buka halaman utama
    await page.goto('https://djoin-notif-test.solusisakti.xyz/');
    // Verifikasi URL
    await expect(page).toHaveURL(/djoin-notif-test.solusisakti.xyz/);
    await page.waitForTimeout(5000);
    // Melakukan login
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByPlaceholder('Masukkan email/no handphone anda').fill('081236654144');
    await page.getByPlaceholder('Masukkan kata sandi anda').fill('pinjamduluseratus');
    await page.getByLabel('appended action').click();
    await page.getByRole('button', { name: 'Lanjutkan' }).click();

    // Navigasi dan Verifikasi
    await page.getByRole('link', { name: 'DjoinNotif' }).click();
    await expect(page).toHaveTitle(/Djoin/);

    // Waktu Tunggu
    await page.waitForTimeout(5000);
});

// Dengan menyatukan langkah-langkah ini ke dalam satu blok pengujian, Anda memastikan bahwa setiap langkah dijalankan secara berurutan, menggambarkan alur lengkap dari login hingga navigasi ke halaman lain. Ini membuat kode lebih mudah dipahami dan dielola. Jangan lupa untuk memastikan bahwa semua langkah sesuai dengan alur kerja dan formulir login yang benar untuk aplikasi Anda.
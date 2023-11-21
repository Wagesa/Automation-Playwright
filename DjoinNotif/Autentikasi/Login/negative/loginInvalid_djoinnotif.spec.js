import { test, expect } from '@playwright/test';

// Login Invalid karena menggunakan usernmae & password yang salah
test('LoginInvalid DjoinNotif', async ({ page }) => {
    // Buka halaman utama
    await page.goto('https://djoin-notif-test.solusisakti.xyz/');

    // Verifikasi URL dan judul halaman
    await expect(page).toHaveURL(/djoin-notif-test.solusisakti.xyz/);
    await expect(page).toHaveTitle(/Home/);
    
    // Melakukan login
    await page.getByRole('button', { name: 'Masuk' }).click();
    await page.getByPlaceholder('Masukkan email/no handphone anda').fill('081246653144');
    await page.getByPlaceholder('Masukkan kata sandi anda').fill('pinjqmdulusaratus');
    await page.getByRole('button', { name: 'Lanjutkan' }).click();

    // Menunggu waktu yang cukup untuk menanggapi hasil login
    await page.waitForTimeout(5000);

    // Pemeriksaan login gagal
    const errorMessage = await page.locator('div.text-center.my-3.text-grey-darken-1.font-weight-medium:has-text("invalid credential")').innerText(5000);
    await expect(errorMessage).toContain('invalid credential');

    // Klik tombol 'Ok'
    await page.getByRole('button', { name: 'Ok' }).click();

    // Verifikasi
    await expect(page).toHaveTitle(/Login/);

    // Waktu Tunggu
    await page.waitForTimeout(5000);
});
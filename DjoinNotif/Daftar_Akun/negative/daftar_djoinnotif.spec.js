import { test, expect } from '@playwright/test'

// Deklarasi pengujian dengan nama 'Daftar DjoinNotif' menggunakan email yang sudah terdaftar
test('Daftar DjoinNotif', async ({ page }) => {

    // Langkah 1: Buka halaman web dengan URL tujuan
    await page.goto('https://djoin-notif-test.solusisakti.xyz/')

    // Langkah 2: Menunda pengujian sementara untuk pemeriksaan manual
    await page.pause()

    // Langkah 3: Cari elemen input dengan placeholder 'Masukkan Nama Lengkap' dan isi dengan 'I Wayan Gerry Surya Pradiva'
    await page.getByPlaceholder('Masukkan Nama Lengkap').fill('I Wayan Gerry Surya Pradiva')

    // Langkah 4: Cari elemen input dengan placeholder 'Masukkan Nomor Handphone' dan isi dengan '08873858203'
    await page.getByPlaceholder('Masukkan Nomor Handphone').fill('08873858203')

    // Langkah 5: Cari elemen input dengan placeholder 'Masukkan Email Anda' dan isi dengan 'wayangerry20@gmail.com'
    await page.getByPlaceholder('Masukkan Email Anda').fill('wayangerry20@gmail.com')

    // Langkah 6: Cari elemen tombol dengan atribut 'role' yang sesuai dengan 'button' dan teks 'Daftar Sekarang', lalu klik tombol tersebut
    await page.getByRole('button', { name: 'Daftar Sekarang' }).click()
})

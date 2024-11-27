# CRUD Product App 🛒

CRUD Product App adalah aplikasi sederhana untuk melakukan operasi **CRUD (Create, Read, Update, Delete)** pada data produk menggunakan **Node.js**, **Express.js**, **MongoDB**, dan **EJS** sebagai template engine.

## 🎯 Fitur

- **Menampilkan daftar produk** menampilkan semua produk dan filter kategori.
- **Menambahkan produk baru** melalui form input.
- **Melihat detail produk** secara spesifik dan filter kategori.
- **Mengedit data produk** yang sudah ada.
- **Menghapus produk** dari daftar.

## 🛠️ Teknologi yang Digunakan

- **Node.js** - Runtime JavaScript di server.
- **Express.js** - Framework web untuk Node.js.
- **MongoDB** - Database NoSQL untuk menyimpan data produk.
- **Mongoose** - ODM untuk MongoDB.
- **EJS** - Template engine untuk render HTML dinamis.
- **Method-Override** - Untuk menangani HTTP methods PUT dan DELETE di form HTML.

## 📂 Struktur Folder
```bash 
crud-products-app/
│
├── models/
│   └── product.js           # Schema model untuk produk
│
├── views/                   # Folder untuk file EJS (template)
│   └── products/            # Subfolder untuk halaman produk
│       ├── create.ejs       # Halaman untuk menambah produk
│       ├── edit.ejs         # Halaman untuk mengedit produk
│       ├── index.ejs        # Halaman untuk daftar produk
│       └── show.ejs         # Halaman detail produk
│   
│
├── seed.js                  # File untuk memasukkan data awal (seed)
├── index.js                 # File utama aplikasi (entry point)
├── package.json             # Metadata dan dependensi proyek
└── README.md                # Dokumentasi proyek

## ⚙️ Instalasi dan Penggunaan

1. **Clone Repository**
   ```bash
   git clone https://github.com/ImamHaqi23/learn-express-mongodb
   cd learn-express-mongodb

2. **Instalasi Dependensi**
   ```bash
   npm install

3. **Menjalankan MongoDB**
   ```bash
   mongod (Jalankan di Terminal)

4. **Seed Data (Untuk menambahkan data awal ke database)**
   ```bash
   node seed.js (Jalankan di Terminal)

5. **Menjalankan Server**
   ```bash
   node index.js / nodemon index.js (Jalankan di Terminal)
   Aplikasi akan berjalan di: http://127.0.0.1:3000

## 🖥️ Cara Penggunaan

- Buka browser Anda dan akses http://127.0.0.1:3000/products untuk melihat daftar produk.
- Gunakan navigasi pada halaman untuk:
    - Menambah produk baru.
    - Melihat detail produk.
    - Mengedit produk.
    - Menghapus produk.

## 📝 Halaman Aplikasi

1. Daftar Produk (views/products/index.ejs)
   Menampilkan semua produk yang ada dengan filter kategori.

2. Tambah Produk (views/products/create.ejs)
   Formulir untuk menambahkan produk baru.

3. Detail Produk (views/products/show.ejs)
   Menampilkan informasi lengkap tentang produk.

4. Edit Produk (views/products/edit.ejs)
   Formulir untuk memperbarui informasi produk.

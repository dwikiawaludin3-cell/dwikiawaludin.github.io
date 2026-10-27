# Dwiki Awaludin — React Portfolio

Portfolio personal berbasis React + Vite, dengan layout responsive, project case study yang bisa dibuka, skill React.js / React Native / Golang, dan kontak email.

## Menjalankan secara lokal

Pastikan Node.js versi LTS sudah terpasang.

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite.

## Build production

```bash
npm run build
npm run preview
```

Hasil build tersedia di folder `dist/`.

## Deploy ke GitHub Pages

Cara paling sederhana: build lalu deploy isi folder `dist/` melalui workflow GitHub Pages atau hosting static yang mendukung Vite. Jika repository memakai URL project (bukan domain root), set `base` di `vite.config.js` sesuai nama repository sebelum build.

Catatan: alamat email dan link GitHub pada portfolio dapat disesuaikan di `src/App.jsx`. Status project dan uraian case study juga sebaiknya disesuaikan dengan kondisi terkini sebelum dipublikasikan.

const CACHE_NAME = 'my-site-cache-v1';
// لیست تمام صفحه‌ها و فایل‌هایی که می‌خوای آفلاین در دسترس باشن:
const urlsToCache = [
    'menu.html',
    'stsrt_admin.html',
    'sh5_admin.html',
    'sh4_admin.html',
    'sh3_admin.html',
    'app.js'
];

// مرحله ۱: نصب (ذخیره کردن فایل‌ها در حافظه کش مرورگر)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// مرحله ۲: واکشی (هر بار که کاربر درخواستی می‌ده، اول چک کن توی کش هست یا نه)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

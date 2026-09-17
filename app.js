// فایل app.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('سرویس‌ورکر با موفقیت ثبت شد:', registration.scope);
      })
      .catch((error) => {
        console.log('خطا در ثبت سرویس‌ورکر:', error);
      });
  });
}

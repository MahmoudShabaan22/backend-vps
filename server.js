const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // نستخدم متغير بيئة، وإذا لم يوجد نستخدم 5000

// تفعيل CORS للسماح للـ Frontend بالتواصل مع الـ Backend
app.use(cors());
app.use(express.json());

// مسار رئيسي للتأكد من أن السيرفر شغال
app.get('/', (req, res) => {
  res.send('Backend API is running! 🚀 ');
});

// مسار الـ API الذي سيطلبه الـ Frontend
app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from the Backend API! ci ",
    timestamp: new Date().toISOString(),
    devops_fact: "Nginx is routing this request to the backend container."
  });
});

// ملاحظة هامة جداً للـ Docker: نربط السيرفر بـ 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

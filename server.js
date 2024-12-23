const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/favicon.ico', (req, res) => res.status(204));

// 정적 파일 제공
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

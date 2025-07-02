const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    return res.json({ message: 'Login successful' });
  }
  return res.status(401).json({ message: 'Login failed' });
});

app.listen(4000, () => console.log('Backend running on port 4000'));

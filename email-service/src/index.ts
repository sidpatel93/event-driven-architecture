import express from 'express';
const app = express();
app.use(express.json());

app.post('/send', (req, res) => {
  // Placeholder for email logic
  res.json({ message: 'Email sent!' });
});

app.listen(3000, () => {
  console.log('Email Service running on port 3000');
});

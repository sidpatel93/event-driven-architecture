import express from 'express';
const app = express();
app.use(express.json());

app.post('/pay', (req, res) => {
  // Placeholder for payment logic
  res.json({ message: 'Payment processed!' });
});

app.listen(3000, () => {
  console.log('Payment Service running on port 3000');
});

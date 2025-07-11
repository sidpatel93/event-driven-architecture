import express from 'express';
const app = express();
app.use(express.json());

app.post('/placeOrder', (req, res) => {
  // Placeholder for order logic
  res.json({ message: 'Order placed!' });
});

app.listen(3000, () => {
  console.log('Order Service running on port 3000');
});

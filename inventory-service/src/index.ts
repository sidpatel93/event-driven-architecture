import express from 'express';
const app = express();
app.use(express.json());

app.get('/inventory', (req, res) => {
  // Placeholder for inventory logic
  res.json({ message: 'Inventory checked!' });
});

app.listen(3000, () => {
  console.log('Inventory Service running on port 3000');
});

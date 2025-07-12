import express from 'express';
import { createKafkaClient } from '@sid/shared/src'; // Assuming shared/src/kafka exports createKafkaClient
const app = express();
app.use(express.json());

// create a kakfa client
const orderKafkaClient = createKafkaClient('kafka://localhost:9092', "order-service-client");

app.post('/placeOrder', (req, res) => {
  // Placeholder for order logic
  res.json({ message: 'Order placed!' });
});

app.listen(3000, () => {
  console.log('Order Service running on port 3000');
});

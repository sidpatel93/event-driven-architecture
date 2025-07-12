import express from 'express';
import { initOrderKafka, orderProducer } from './components/order-kafka';
const app = express();
app.use(express.json());


initOrderKafka().catch(console.error);


app.post('/placeOrder', async (req, res) => {
  // Placeholder for order logic
  await orderProducer.send({
    topic: 'order_received',
    messages: [{
      key: 'order_id',
      value: JSON.stringify(req.body) // Assuming req.body contains order details
    }]

  });
  res.json({ message: 'Order is placed!' });
});

app.listen(3000, () => {
  console.log('Order Service running on port 3000');
});

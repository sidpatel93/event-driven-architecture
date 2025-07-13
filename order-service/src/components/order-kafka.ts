import { createKafkaClient } from '@sid/shared/src';
import { Producer, Kafka } from 'kafkajs';

let orderProducer: Producer;
let orderKafkaClient: Kafka;

export async function initOrderKafka() {
  console.log('Initializing Kafka for Order Service');
  orderKafkaClient = createKafkaClient('localhost:9094', 'order-service-client');
  orderProducer = orderKafkaClient.producer();
  console.log('Connecting to Kafka as order-service-producer');
  await orderProducer.connect();
  const clientAdmin = orderKafkaClient.admin();
  console.log('Connected to Kafka as order-service-client');
  await clientAdmin.connect();
  await clientAdmin.createTopics({
    topics: [{ topic: 'order_received', numPartitions: 1 }]
  });
}

export { orderProducer, orderKafkaClient };

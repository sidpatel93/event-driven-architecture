import { Kafka, Producer, Consumer } from 'kafkajs';

export function createKafkaClient(broker: string) {
  return new Kafka({ brokers: [broker] });
}

export function createProducer(kafka: Kafka): Producer {
  return kafka.producer();
}

export function createConsumer(kafka: Kafka, groupId: string): Consumer {
  return kafka.consumer({ groupId });
}

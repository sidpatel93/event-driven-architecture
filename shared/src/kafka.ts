import { Kafka, Producer, Consumer } from 'kafkajs';

export function createKafkaClient(broker: string, clientId: string) {
  return new Kafka({ clientId: clientId, brokers: [broker] });
}

export function createProducer(kafka: Kafka): Producer {
  return kafka.producer();
}

export function createConsumer(kafka: Kafka, groupId: string): Consumer {
  return kafka.consumer({ groupId });
}

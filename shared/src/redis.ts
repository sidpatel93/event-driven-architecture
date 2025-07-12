import { createClient } from 'redis';

export function createRedisClient(url: string) {
  const client = createClient({ url });
  client.on('error', (err) => console.error('Redis Client Error', err));
  return client;
}

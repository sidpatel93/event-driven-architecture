import { createClient, RedisClientType } from 'redis';

export function createRedisClient(url: string): RedisClientType<any, any> {
  const client = createClient({ url });
  client.on('error', (err) => console.error('Redis Client Error', err));
  return client;
}

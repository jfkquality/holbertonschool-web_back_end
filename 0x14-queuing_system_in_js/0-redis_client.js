import redis from 'redis';
const client = redis.createClient();

client.on("error", (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

client.on('ready', () => {
  console.log('Redis client connected to the server');
});

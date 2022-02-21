import redis from 'redis';
const client = redis.createClient();
const subscriber = redis.createClient();
const publisher = redis.createClient();

client.on("error", (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

client.on('ready', () => {
  console.log('Redis client connected to the server');
});

const channel = 'holberton school channel';

subscriber.subscribe(channel);

subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message == 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});

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

function publishMessage (message, time) {
  setTimeout(() => {
    console.log('About to send MESSAGE');
    publisher.publish('holberton school channel', message);
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);

import redis from 'redis';
import { promisify } from 'util';
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

client.on("error", (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

client.on('ready', () => {
  console.log('Redis client connected to the server');
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

async function displaySchoolValue(schoolName) {
  console.log(await getAsync(schoolName));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

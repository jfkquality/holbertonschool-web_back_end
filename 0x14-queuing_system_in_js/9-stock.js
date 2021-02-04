import express from 'express';
import redis from 'redis';
import { promisify } from 'util';


const listProducts = [
  {ItemId: 1, itemName: 'Suitcase 250', price: 50, initialAvailableQuantity: 4},
  {ItemId: 2, itemName: 'Suitcase 450', price: 100, initialAvailableQuantity: 10},
  {ItemId: 3, itemName: 'Suitcase 650', price: 350, initialAvailableQuantity: 2},
  {ItemId: 4, itemName: 'Suitcase 1050', price: 550, initialAvailableQuantity: 5},
];

function getItemById(id) {
  const obj = listProducts.find(obj => obj.iteimId == id);
  return obj;
}
const app = express();
const port = 1245;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.json());

app.get('/list_products', (req, res) => {
  res.json(listProducts);
});


const client = redis.createClient();
client.on('error', (error) => {
      console.error(error);
});

function reserveStockById(itemId, stock) {
  client.set(itemId, stock)
}

async function getCurrentReservedStockById(itemId) {
  return client.get(itemId);
}

app.get('/list_products/:itemId', (req, res) => {
  if (!getItemById(req.params.itemId)) {
    res.json({'status': 'Product not found'});
  }
});

app.get('/reserve_product/:itemId', (req, res) => {
  const item = getItemById(req.params.itemId);
  if (!item) {
    res.json({'status': 'Product not found'});
  }
  if (item.initialAvailableQuantity < 1) {
    res.json({"status":"Reservation confirmed","itemId": item.itemId});
  }
});

export default app;

import express from 'express';
import redis from 'redis';
import { promisify } from 'util';


const listProducts = [
  {itemId: 1, itemName: 'Suitcase 250', price: 50, initialAvailableQuantity: 0},
  {itemId: 2, itemName: 'Suitcase 450', price: 100, initialAvailableQuantity: 10},
  {itemId: 3, itemName: 'Suitcase 650', price: 350, initialAvailableQuantity: 2},
  {itemId: 4, itemName: 'Suitcase 1050', price: 550, initialAvailableQuantity: 5},
];

function getItemById(id) {
  const obj = listProducts.find(obj => obj.itemId == id);
  // console.log('OBJ FROM GET ITEM BY ID: ', obj, 'ITEM ID: ', id);
  return obj;
}

// Create express server
const app = express();
const port = 1245;

app.listen(port, () => {
  for (const product of listProducts) {
    reserveStockById(product.itemId, product.initialAvailableQuantity)
  }
  console.log(`Server running on port ${port}`);
});

app.use(express.json());

app.get('/list_products', (req, res) => {
  res.json(listProducts);
});

// Create redis client
const client = redis.createClient();
client.on('error', (error) => {
      console.error(error);
});
const clientGet = promisify(client.get).bind(client);

function reserveStockById(itemId, stock) {
  client.set(itemId, stock) //currentQuantity
}

async function getCurrentReservedStockById(itemId) {
  const item = await clientGet(itemId)
  // console.log('CURRENT AVAIL STOCK: ',  item.currentQuantity);
  return item.currentQuantity;
}

app.get('/list_products/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const item = getItemById(itemId);
  const stock = getCurrentReservedStockById(itemId);

  // console.log('ITEM FROM APP.GET LIST PROD BY ID: ', item);
  if (!item) {
    res.json({status: 'Product not found'});
  }
  item.currentQuantity = stock;
  res.json(item);
});

app.get('/reserve_product/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const item = getItemById(itemId);

  if (!item) {
    res.json({status: 'Product not found'});
    return;
  }
  const stock = getCurrentReservedStockById(itemId);

  if (stock < 1) {
    res.json({status:"Not enough stock available","itemId": itemId});
    return;
  }
  reserveStockById(itemId, stock);
  res.json({status:"Reservation confirmed","itemId": item.itemId});
});

export default app;

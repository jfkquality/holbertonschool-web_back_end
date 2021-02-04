import express from 'express';


const listProducts = [
  {ItemId: 1, itemName: Suitcase 250, price: 50, initialAvailableQuantity: 4},
  {ItemId: 2, itemName: Suitcase 450, price: 100, initialAvailableQuantity: 10},
  {ItemId: 3, itemName: Suitcase 650, price: 350, initialAvailableQuantity: 2},
  {ItemId: 4, itemName: Suitcase 1050, price: 550, initialAvailableQuantity: 5},
];

function getItemById(id) {
  const obj = listProducts.find(obj => obj.id == id);
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

app.get('/list_products/:itemId', (req, res) => {
  if (!getItemById(itemId)) {
    res.json('status': 'Product not found');
  }
});

export default app;

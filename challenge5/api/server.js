const express = require('express');
const cors = require('cors');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const items = [
  { id: 1, title: 'Item 1', description: 'Description for item 1' },
  { id: 2, title: 'Item 2', description: 'Description for item 2' },
  { id: 3, title: 'Item 3', description: 'Description for item 3' },
  { id: 4, title: 'Item 4', description: 'Description for item 4' },
  { id: 5, title: 'Item 5', description: 'Description for item 5' }
];

app.get('/items', (req, res) => {
  res.json(items);
});

module.exports = serverless(app);

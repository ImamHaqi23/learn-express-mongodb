const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');

// Koneksi ke MongoDB
mongoose
  .connect('mongodb://127.0.0.1/crud_db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const Product = require('./models/product'); // untuk import model

app.set('views', path.join(__dirname, 'views')); // untuk menentukan folder views
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // untuk parsing form data dari request
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/products', async (req, res) => {
  // untuk menampilkan data produk
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render('products/index', { products, category });
  } else {
    const products = await Product.find({});
    res.render('products/index', { products, category: 'All' });
  }
});

app.get('/products/create', (req, res) => {
  // untuk menampilkan form
  res.render('products/create');
});

app.post('/products', async (req, res) => {
  // untuk menyimpan data
  const product = new Product(req.body);
  await product.save();
  res.redirect(`/products/${product._id}`);
});

app.get('/products/:id', async (req, res) => {
  // untuk menampilkan detail produk
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product });
});

app.get('/products/:id/edit', async (req, res) => {
  // untuk menampilkan form edit
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product });
});

app.put('/products/:id', async (req, res) => {
  // untuk mengupdate data produk
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
  // untuk menghapus data produk
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products');
});

app.listen(3000, () => {
  console.log('Server berjalan di http://127.0.0.1:3000');
});

import mongoose from 'mongoose';
const DB_URL ='mongoose://localhost:27017/shop';
mongoose.connect(DB_URL)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => {
    console.log('Connected to mongodb');
});

const prodcutSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});

const Product =mongoose.model('Product', productSchema);

export default Product;
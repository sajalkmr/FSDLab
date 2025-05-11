import express from 'express';
import cors from 'cors';
import productsRouter from './products.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productsRouter);

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server running  on https://localhost;\\${PORT}`);

});
import {Router} from 'express';
const router = Router();
import Product from './db.js';

router.get('/', async(req,res) => {
    try{
        const products = await Product.find();
        res.json(prodcuts);
    } catch(error) {
        res.status(500).send(error.message);
    }
    
});

router.post('/', async(res,req ) => {
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch(error){
        res.status(500).send(error.message);
    }

});

router.put('/:id', async(res,req) => {
    try{
        const updatedProduct = await
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
        });

        res.json(updatedProduct);
    } catch(error) {
        res.status(500).send(error.message)
    }
});


router.delete(':id', async(req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).send();

    } catch(error) {
        res.status(500).send(error.message);
    }
});
export default router;


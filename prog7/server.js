import express,{json} from "express";
const app=express();
const port = 3000;

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(port,()=>{
    console.log(`Server runing at http://localhost:${port}`);
});

let products=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Mobile",price:10000}
];

app.get('/',(req,res)=>{
    res.send('Hello Express');
});

app.get('/products',(req,res)=>{
    res.json(products);
});

app.post('/products',(req,res)=>{
    const newProduct={
        id:products.length+1,
        ...req.body
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.get('/products/:id',(req,res)=>{
    const product = products.find(p=>p.id===parseInt(req.params.id));
    if(!product) return res.status(404).json({message:"Product Not Found"});
    res.json(product);
});

app.put('/products/:id',(req,res)=>{
    const index = products.findIndex(p=>p.id===parseInt(req.params.id));
    if(index===-1) return res.status(404).json({message:"Product Not Found"});
    
    products[index]={ ...products[index], ...req.body };
    res.json(products[index]);
});

app.delete('/products/:id',(req,res)=>{
    const index = products.findIndex(p=>p.id===parseInt(req.params.id));
    if(index===-1) return res.status(404).json({message:"Product Not Found"});
    
    const deleted=products.splice(index,1);
    res.json(deleted[0]);
});
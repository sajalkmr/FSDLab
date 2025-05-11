import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

const App = () => {
    const [products, setProducts] = useState([]);

    // Fetch products
    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const response = await fetch(`http://localhost:5000/products`);
        if (!response.ok) {
            const message = `Error while fetching the products: ${response.statusText}`;
            console.error(message);
            return;
        }
        const products = await response.json();
        setProducts(products);
    }

    return (
        <div style={{ padding: "20px" }}>
            <ProductList products={products} />
            <AddProduct fetchProducts={fetchProducts} />
        </div>
    );
};

export default App;
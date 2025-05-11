import React, { useState } from "react";

const AddProduct = ({ fetchProducts }) => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        description: "",
    });

    async function handleAddProduct() {
        try {
            let response = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error(`HTTP status = ${response.status}`);
            }

            setNewProduct({ name: "", price: "", description: "" });
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }

    return (
        <>
            <h2>Add New Product</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={newProduct.name}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, description: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                    }
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </>
    );
};

export default AddProduct;

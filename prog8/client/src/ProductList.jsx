const ProductList = ({ products }) => {
  return (
      <>
          <h1>Product List</h1>
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  {products.map((product) => (
                      <tr key={product._id}>
                          <td>{product.name}</td>
                          <td>{product.description}</td>
                          <td>${product.price}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </>
  );
};

export default ProductList;
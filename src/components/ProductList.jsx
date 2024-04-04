import React from 'react';

const ProductList = ({ products, onAddProduct }) => {
  return (
    <div>
      <button onClick={onAddProduct}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Product Photo</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.photo} alt={product.name} /></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
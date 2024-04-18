import React from 'react';
import '../styles/productList.css';

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.photo} alt={product.name} className="product-image" />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity} {product.unit}</td>
              <td>
                <button className="remove-preview-button" onClick={() => onDeleteProduct(product.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
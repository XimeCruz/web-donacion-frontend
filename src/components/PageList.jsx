import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductPopup from './AddProductPopup';

const PageList = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <AddProductPopup onAddProduct={handleAddProduct} />}
      <ProductList products={products} onAddProduct={() => setShowPopup(true)} />
    </div>
  );
};

export default PageList;
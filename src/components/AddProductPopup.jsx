import React, { useState } from 'react';

const AddProductPopup = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleAddProduct = () => {
    onAddProduct({ name, category, quantity, photo: 'path/to/default/photo' });
    setName('');
    setCategory('');
    setQuantity(0);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddProduct}>Save this item</button>
      </form>
    </div>
  );
};

export default AddProductPopup;
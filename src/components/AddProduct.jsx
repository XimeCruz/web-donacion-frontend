import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddProduct.css';
import ProductList from './ProductList';

const AddProduct = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [otherCategory, setOtherCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [unit,setUnit] = useState('');
    const [photo, setPhoto] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [products, setProducts] = useState([]);
    const [motivo,setMot] = useState('');
  
    const handleAddProduct = (e) => {
      e.preventDefault();
      const newProduct = { id: products.length + 1, name, category, quantity, photo };
      setProducts([...products, newProduct]);
      setName('');
      setCategory('');
      setOtherCategory('');
      setQuantity(0);
      setUnit('');
      setPhoto('');
      setSelectedFile(null);
      setMot('');
    };
  
    const handleFileSelection = (event) => {
      setSelectedFile(event.target.files[0]);
      setPhoto(URL.createObjectURL(event.target.files[0]));
    };
  
    
    const handleDeleteProduct = (productId) => {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    };
  
    const navigate = useNavigate();
    const handleCancel = () => {
      navigate('/');
    };

  return (
    <div>
      <div className="solicitud-alimento-container">
        <h2 className="form-title">Solicitar Alimento</h2>
        <form onSubmit={handleAddProduct} className="solicitud-alimento-form">
          <div className="form-group">
            <label htmlFor="photo">Foto:</label>
            <input
              type="file"
              id="photo"
              onChange={handleFileSelection}
              accept="image/*"
            />
            {selectedFile && (
              <div className="preview-container">
                <img src={photo} alt={selectedFile.name} className="preview-image" />
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFile(null);
                    setPhoto('../images/Image-not-found.png');
                  }}
                  className="remove-preview-button"
                >
                  Eliminar vista previa
                </button>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoría:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-dropdown"
            >
              <option value="">Tipo de alimento</option>
              <option value="Frutas">Frutas</option>
              <option value="Verduras">Verduras</option>
              <option value="Carnes">Carnes</option>
              <option value="Pescados">Pescados</option>
              <option value="Otros">Otros</option>
            </select>
            {category === 'Otros' && (
              <input
                type="text"
                placeholder="Especificar otro tipo"
                value={otherCategory}
                onChange={(e) => setOtherCategory(e.target.value)}
                className="other-category-input"
              />
            )}
          </div>
          <div className="form-group cantidad-group">
            <label htmlFor="quantity">Cantidad:</label>
            <div className="cantidad-container">
              <button
                type="button"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 0}
                className="cantidad-button"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="cantidad-input"
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="cantidad-button"
              >
                +
              </button>
              <input
                type="text"
                placeholder="Unidades de medida"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="other-category-input"
              />
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="submit-button">
              Agregar
            </button>
            <ProductList
                products={products}
                onDeleteProduct={handleDeleteProduct}
            />
            <div className="form-group">
                <label htmlFor="motivoSolicitud">Motivo de Solicitud:</label>
                <textarea 
                  type ="text"
                  placeholder="Motivo de Solicitud" 
                  name="motivoSolicitud" 
                  value={motivo} 
                  onChange={(e) => setMot(e.target.value)} required />
            </div>
            <div className="sep">
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit" className="submit-button">
                Enviar Solicitud
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

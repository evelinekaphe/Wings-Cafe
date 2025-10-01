import React from 'react';

function ProductManager() {
  const [productName, setProductName] = useState('');

  return (
    <div>
      <h2>Product Management</h2>
      <form>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <p>You typed: {productName}</p>
      </form>
    </div>
  );
}

export default ProductManager;

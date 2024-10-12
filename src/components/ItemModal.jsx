import React, { useState, useEffect } from 'react';

const ItemModal = ({ addItem, updateItem, editItem, closeModal }) => {
  const [itemData, setItemData] = useState({ name: '', quantity: '', category: '', supplier: '' });

  useEffect(() => {
    if (editItem) {
      setItemData(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      updateItem(itemData);
    } else {
      addItem(itemData);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">{editItem ? 'Edit Inventory Item' : 'Add Inventory Item'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="name" value={itemData.name} onChange={handleChange} placeholder="Item Name" className="p-2 border" required />
            <input type="number" name="quantity" value={itemData.quantity} onChange={handleChange} placeholder="Quantity" className="p-2 border" required />
            <input type="text" name="category" value={itemData.category} onChange={handleChange} placeholder="Category" className="p-2 border" required />
            <input type="text" name="supplier" value={itemData.supplier} onChange={handleChange} placeholder="Supplier" className="p-2 border" required />
          </div>
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={closeModal} className="mr-2 bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editItem ? 'Update Item' : 'Add Item'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemModal;

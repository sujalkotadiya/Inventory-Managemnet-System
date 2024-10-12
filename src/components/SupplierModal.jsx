import React, { useState, useEffect } from 'react';

const SupplierModal = ({ addSupplier, updateSupplier, editSupplier, closeModal }) => {
  const [supplierData, setSupplierData] = useState({ name: '', contact: '', itemsSupplied: '' });

  useEffect(() => {
    if (editSupplier) {
      setSupplierData(editSupplier);
    }
  }, [editSupplier]);

  const handleChange = (e) => {
    setSupplierData({ ...supplierData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editSupplier) {
      updateSupplier(supplierData);
    } else {
      addSupplier(supplierData);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">{editSupplier ? 'Edit Supplier' : 'Add Supplier'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <input 
              type="text" 
              name="name" 
              value={supplierData.name} 
              onChange={handleChange} 
              placeholder="Supplier Name" 
              className="p-2 border" 
              required 
            />
            <input 
              type="text" 
              name="contact" 
              value={supplierData.contact} 
              onChange={handleChange} 
              placeholder="Contact Details" 
              className="p-2 border" 
              required 
            />
            <input 
              type="text" 
              name="itemsSupplied" 
              value={supplierData.itemsSupplied} 
              onChange={handleChange} 
              placeholder="Items Supplied" 
              className="p-2 border" 
              required 
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={closeModal} className="mr-2 bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editSupplier ? 'Update Supplier' : 'Add Supplier'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplierModal;

import React, { useState } from 'react';

const SupplierDashboard = ({ suppliers, onAddClick, onDeleteClick, onEditClick }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Supplier Management</h2>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onAddClick}
        >
          + Add Supplier
        </button>
      </div>

      {suppliers.length > 0 ? (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Supplier Name</th>
              <th className="border px-4 py-2">Contact Details</th>
              <th className="border px-4 py-2">Items Supplied</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td className="border px-4 py-2">{supplier.name}</td>
                <td className="border px-4 py-2">{supplier.contact}</td>
                <td className="border px-4 py-2">{supplier.itemsSupplied}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => onEditClick(supplier)} className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
                  <button onClick={() => onDeleteClick(supplier.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No suppliers available. Please add suppliers.</p>
      )}
    </div>
  );
};

export default SupplierDashboard;

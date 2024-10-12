import React, { useState } from 'react';

const InventoryDashboard = ({ items, onAddClick, onDeleteClick, onEditClick, onSearchChange, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Inventory Dashboard</h2>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onAddClick}
        >
          + Add Item
        </button>
      </div>

      {/* Search & Filter Section */}
      <div className="flex mb-4 space-x-4">
        <input
          type="text"
          placeholder="Search by item name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded w-full"
        />
        <select
          value={filterCategory}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Filter by Category</option>
          {Array.from(new Set(items.map(item => item.category))).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Inventory Table */}
      {items.length > 0 ? (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Item Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Supplier</th>
              <th className="border px-4 py-2">Stock Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className={item.quantity < 10 ? "bg-red-100" : "bg-green-100"}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">{item.supplier}</td>
                <td className="border px-4 py-2">{item.quantity < 10 ? 'Low Stock' : 'In Stock'}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => onEditClick(item)} className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
                  <button onClick={() => onDeleteClick(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No items available. Please add items.</p>
      )}
    </div>
  );
};

export default InventoryDashboard;

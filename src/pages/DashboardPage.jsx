import React, { useState } from 'react';
import InventoryDashboard from '../components/InventoryDashboard';
import ItemModal from '../components/ItemModal';
import SupplierDashboard from '../components/SupplierDashboard';
import SupplierModal from '../components/SupplierModal';

const DashboardPage = () => {
  const [items, setItems] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editSupplier, setEditSupplier] = useState(null);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);
  const [isInventoryView, setIsInventoryView] = useState(true);

  // Add, Update, Delete Items Logic
  const addItem = (newItem) => {
    setItems([...items, { id: items.length + 1, ...newItem }]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const openItemModal = () => {
    setIsModalOpen(true);
    setEditItem(null);
  };

  const openEditItemModal = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const closeItemModal = () => {
    setIsModalOpen(false);
  };

  // Add, Update, Delete Suppliers Logic
  const addSupplier = (newSupplier) => {
    setSuppliers([...suppliers, { id: suppliers.length + 1, ...newSupplier }]);
  };

  const updateSupplier = (updatedSupplier) => {
    setSuppliers(suppliers.map(supplier => (supplier.id === updatedSupplier.id ? updatedSupplier : supplier)));
  };

  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  const openSupplierModal = () => {
    setIsSupplierModalOpen(true);
    setEditSupplier(null);
  };

  const openEditSupplierModal = (supplier) => {
    setEditSupplier(supplier);
    setIsSupplierModalOpen(true);
  };

  const closeSupplierModal = () => {
    setIsSupplierModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Toggle between Inventory and Supplier */}
      <div className="flex justify-between items-center mb-6">
        <button
          className={`px-4 py-2 rounded ${isInventoryView ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsInventoryView(true)}
        >
          Inventory
        </button>
        <button
          className={`px-4 py-2 rounded ${!isInventoryView ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsInventoryView(false)}
        >
          Supplier Management
        </button>
      </div>

      {isInventoryView ? (
        <>
          <InventoryDashboard
            items={items}
            onAddClick={openItemModal}
            onDeleteClick={deleteItem}
            onEditClick={openEditItemModal}
          />
          {isModalOpen && (
            <ItemModal
              addItem={addItem}
              updateItem={updateItem}
              editItem={editItem}
              closeModal={closeItemModal}
            />
          )}
        </>
      ) : (
        <>
          <SupplierDashboard
            suppliers={suppliers}
            onAddClick={openSupplierModal}
            onDeleteClick={deleteSupplier}
            onEditClick={openEditSupplierModal}
          />
          {isSupplierModalOpen && (
            <SupplierModal
              addSupplier={addSupplier}
              updateSupplier={updateSupplier}
              editSupplier={editSupplier}
              closeModal={closeSupplierModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default DashboardPage;

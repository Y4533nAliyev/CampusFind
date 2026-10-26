import { useEffect, useState } from 'react';
import { getItems } from '../api';

export default function Browse() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const data = await getItems();
      setItems(data);
    }
    loadItems();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Browse Items</h1>
      
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="border p-2 rounded w-full">
          <option value="">All Types</option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
        <select className="border p-2 rounded w-full">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="accessories">Accessories</option>
        </select>
        <select className="border p-2 rounded w-full">
          <option value="">All Locations</option>
          <option value="library">Library</option>
          <option value="gym">Gym</option>
        </select>
        <input type="date" className="border p-2 rounded w-full" />
      </div>

      {/* Items List */}
      <div className="grid gap-4">
        {items.map(item => (
          <div key={item.id} className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-600">Type: {item.type}</p>
            <p className="text-gray-600">Location: {item.location}</p>
            <p className="text-gray-600">Date: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
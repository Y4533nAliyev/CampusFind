// src/pages/Browse.jsx
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Browse Items</h1>
      <div className="grid gap-4">
        {items.map(item => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>Type: {item.type}</p>
            <p>Location: {item.location}</p>
            <p>Date: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
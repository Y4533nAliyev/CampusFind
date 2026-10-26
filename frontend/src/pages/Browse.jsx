import { useEffect, useState } from 'react';
import { getItems } from '../api';

export default function Browse() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulating a slow network connection (1.5 seconds) so you can see the loading state
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const data = await getItems();
        setItems(data);
      } catch (err) {
        setError("Failed to load items. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Browse Items</h1>
      
      <div className="flex gap-4 mb-6">
        <select className="border p-2 rounded w-full"><option value="">All Types</option></select>
        <select className="border p-2 rounded w-full"><option value="">All Categories</option></select>
        <select className="border p-2 rounded w-full"><option value="">All Locations</option></select>
        <input type="date" className="border p-2 rounded w-full" />
      </div>

      {/* 1. Loading State */}
      {isLoading && (
        <div className="flex justify-center p-12">
          <p className="text-xl text-blue-600 font-bold animate-pulse">Loading items...</p>
        </div>
      )}

      {/* 2. Error State */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
          <p>{error}</p>
        </div>
      )}

      {/* 3. Empty State */}
      {!isLoading && !error && items.length === 0 && (
        <div className="text-center p-12 bg-gray-50 border rounded-lg text-gray-500">
          <p className="text-xl font-bold mb-2">No items found</p>
          <p>Try adjusting your filters or check back later.</p>
        </div>
      )}

      {/* 4. Success State (Data list) */}
      {!isLoading && !error && items.length > 0 && (
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
      )}
    </div>
  );
}
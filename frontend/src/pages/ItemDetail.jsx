import { useEffect, useState } from 'react';

export default function ItemDetail() {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDetail() {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        
        // Mock data
        setItem({
          title: "Lost AirPods",
          location: "Library",
          date: "2026-10-25",
          claims: [{ id: 1, text: "I have the serial number, it's XYZ." }]
        });
      } catch (err) {
        setError("Failed to load item details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    loadDetail();
  }, []);

  if (isLoading) {
    return <div className="p-12 text-center text-xl text-blue-600 font-bold animate-pulse">Loading item details...</div>;
  }

  if (error) {
    return <div className="p-4 m-8 bg-red-100 border-l-4 border-red-500 text-red-700">{error}</div>;
  }

  if (!item) {
    return <div className="p-12 text-center text-gray-500 font-bold">Item not found.</div>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto grid grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 mb-6">Location: {item.location} | Date: {item.date}</p>
        
        <h2 className="text-xl font-bold mb-2">Claim this item (For Visitors)</h2>
        <form className="grid gap-2">
          <textarea placeholder="Provide proof of ownership..." className="border p-2 rounded h-24"></textarea>
          <button className="bg-green-600 text-white p-2 rounded font-bold">Submit Claim</button>
        </form>
      </div>

      <div className="bg-gray-50 p-6 rounded shadow border">
        <h2 className="text-xl font-bold mb-4">Manage Claims (For Poster)</h2>
        {item.claims.length === 0 ? (
          <p className="text-gray-500">No claims received yet.</p>
        ) : (
          item.claims.map(claim => (
            <div key={claim.id} className="border-b border-gray-200 pb-4 mb-4">
              <p className="mb-3 text-gray-700">"{claim.text}"</p>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded font-bold">Approve</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded font-bold">Reject</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
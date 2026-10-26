import { useEffect, useState } from 'react';

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMatches() {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        // Mock data
        setMatches([{ id: 1, title: "Found White AirPods", score: 95, reason: "Same location (Library) and posted 1 day apart." }]);
      } catch (err) {
        setError("Failed to load matches.");
      } finally {
        setIsLoading(false);
      }
    }
    loadMatches();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Possible Matches</h1>
      
      {isLoading && (
        <div className="text-center p-12 text-xl text-blue-600 font-bold animate-pulse">Loading matches...</div>
      )}
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">{error}</div>
      )}
      
      {!isLoading && !error && matches.length === 0 && (
        <div className="text-center p-12 bg-gray-50 border rounded-lg text-gray-500 font-bold">No matches found.</div>
      )}

      {!isLoading && !error && matches.length > 0 && (
        <div className="grid gap-4">
          {matches.map(match => (
            <div key={match.id} className="border p-4 rounded shadow bg-white border-l-4 border-green-500">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{match.title}</h2>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">{match.score}% Match</span>
              </div>
              <p className="text-gray-600 mb-4">Reason: {match.reason}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold">View Item</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default function Matches() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Possible Matches</h1>
      <div className="border p-4 rounded shadow bg-white border-l-4 border-green-500">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Found White AirPods</h2>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">95% Match</span>
        </div>
        <p className="text-gray-600 mb-4">Reason: Same location (Library) and posted 1 day apart.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold">View Item</button>
      </div>
    </div>
  );
}
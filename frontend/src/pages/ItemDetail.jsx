export default function ItemDetail() {
  return (
    <div className="p-8 max-w-5xl mx-auto grid grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Lost AirPods</h1>
        <p className="text-gray-600 mb-6">Location: Library | Date: 2026-10-25</p>
        
        <h2 className="text-xl font-bold mb-2">Claim this item (For Visitors)</h2>
        <form className="grid gap-2">
          <textarea placeholder="Provide proof of ownership..." className="border p-2 rounded h-24"></textarea>
          <button className="bg-green-600 text-white p-2 rounded font-bold">Submit Claim</button>
        </form>
      </div>

      <div className="bg-gray-50 p-6 rounded shadow border">
        <h2 className="text-xl font-bold mb-4">Manage Claims (For Poster)</h2>
        <div className="border-b border-gray-200 pb-4 mb-4">
          <p className="mb-3 text-gray-700">"I have the serial number, it's XYZ."</p>
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-1 rounded font-bold">Approve</button>
            <button className="bg-red-500 text-white px-4 py-1 rounded font-bold">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}
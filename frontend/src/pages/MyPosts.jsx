export default function MyPosts() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Posts</h1>
      <div className="grid gap-4">
        <div className="border p-4 rounded shadow bg-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Lost Keys</h2>
            <p className="text-gray-600 text-sm">Posted on: 2026-10-20</p>
          </div>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-bold">Open</span>
        </div>
        
        <div className="border p-4 rounded shadow bg-gray-50 flex justify-between items-center opacity-75">
          <div>
            <h2 className="text-xl font-bold">Found ID Card</h2>
            <p className="text-gray-600 text-sm">Posted on: 2026-10-15</p>
          </div>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-bold">Resolved</span>
        </div>
      </div>
    </div>
  );
}
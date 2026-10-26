export default function PostItem() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Post an Item</h1>
      
      <form className="grid gap-4 bg-white p-6 rounded shadow mb-6">
        <input type="text" placeholder="What did you lose or find?" className="border p-2 rounded" />
        <textarea placeholder="Describe it..." className="border p-2 rounded h-32"></textarea>
        <button type="button" className="bg-gray-200 p-2 rounded text-black font-bold">Generate AI Cleanup</button>
      </form>

      {/* AI Cleanup Review Section */}
      <div className="bg-blue-50 p-6 rounded border border-blue-200">
        <h2 className="text-xl font-bold mb-4">Review AI Suggestions</h2>
        <p className="mb-2"><strong>Title:</strong> Black iPhone 13</p>
        <p className="mb-2"><strong>Category:</strong> Electronics</p>
        <p className="mb-4"><strong>Description:</strong> Found a black iPhone 13 with a cracked screen near the library entrance.</p>
        <button className="bg-blue-600 text-white p-2 rounded w-full font-bold">Accept and Post</button>
      </div>
    </div>
  );
}
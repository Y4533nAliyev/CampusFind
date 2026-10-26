import { useEffect, useState } from 'react';

export default function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        // Mock data
        setPosts([
          { id: 1, title: "Lost Keys", date: "2026-10-20", status: "Open" },
          { id: 2, title: "Found ID Card", date: "2026-10-15", status: "Resolved" }
        ]);
      } catch (err) {
        setError("Failed to load your posts.");
      } finally {
        setIsLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Posts</h1>
      
      {isLoading && (
        <div className="text-center p-12 text-xl text-blue-600 font-bold animate-pulse">Loading posts...</div>
      )}
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">{error}</div>
      )}
      
      {!isLoading && !error && posts.length === 0 && (
        <div className="text-center p-12 bg-gray-50 border rounded-lg text-gray-500 font-bold">You have not posted any items yet.</div>
      )}

      {!isLoading && !error && posts.length > 0 && (
        <div className="grid gap-4">
          {posts.map(post => (
            <div key={post.id} className={`border p-4 rounded shadow flex justify-between items-center ${post.status === 'Resolved' ? 'bg-gray-50 opacity-75' : 'bg-white'}`}>
              <div>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600 text-sm">Posted on: {post.date}</p>
              </div>
              <span className={`px-3 py-1 rounded text-sm font-bold ${post.status === 'Resolved' ? 'bg-gray-200 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {post.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
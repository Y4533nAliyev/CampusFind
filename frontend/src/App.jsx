import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import all your page components
import Browse from './pages/Browse';
import Login from './pages/Login';
import Register from './pages/Register'; // Make sure you created this file
import PostItem from './pages/PostItem';
import ItemDetail from './pages/ItemDetail';
import Matches from './pages/Matches';
import MyPosts from './pages/MyPosts';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex gap-6 font-bold">
            <Link to="/" className="hover:underline">Browse</Link>
            <Link to="/post" className="hover:underline">Post Item</Link>
            <Link to="/my-posts" className="hover:underline">My Posts</Link>
            <Link to="/detail" className="hover:underline">Item Detail</Link>
            <Link to="/matches" className="hover:underline">Matches</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </div>
        </nav>

        {/* Page Routing */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/post" element={<PostItem />} />
            <Route path="/detail" element={<ItemDetail />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/my-posts" element={<MyPosts />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}
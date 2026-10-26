export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-4 rounded" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-bold">Register</button>
      </form>
    </div>
  );
}
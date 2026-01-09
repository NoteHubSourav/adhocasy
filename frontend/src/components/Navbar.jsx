export default function Navbar({ setLang }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-primary">ADHOCASY</h1>

      <div className="flex items-center gap-4">
        <select
          onChange={(e) => setLang(e.target.value)}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm"
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>

        <button className="text-secondary font-medium">Login</button>

        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90">
          Register
        </button>
      </div>
    </nav>
  );
}

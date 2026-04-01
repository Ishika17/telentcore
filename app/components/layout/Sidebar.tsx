import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="w-54 bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">
        <Link href="/">Talent Dashboard</Link>
      </h1>

      <nav className="space-y-3">
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Dashboard
        </div>
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">Jobs</div>
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Candidates
        </div>
      </nav>
    </div>
  );
}

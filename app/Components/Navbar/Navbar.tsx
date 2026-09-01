import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex items-center">
      <Link href="/" className="text-white text-xl font-bold">
        CHAPTERHUB
      </Link>
      <div className="ml-auto flex space-x-4">
        <Link href="/" className="text-gray-300 hover:text-white">
          Home
        </Link>
        <Link href="/About" className="text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="/Book" className="text-gray-300 hover:text-white">
          Books
        </Link>
      </div>
    </nav>
  );
}

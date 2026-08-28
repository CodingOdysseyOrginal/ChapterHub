import Link from "next/link";

export default function Book() {
  return (
    <div>
      <h1>Books List</h1>
        <ul>
            <li>
                <Link href="/Book/The-Hobbit" className="text-blue-500 hover:underline">
                    Book 1
                </Link>
            </li>
            <li>
                <Link href="/Book/Neuromancer" className="text-blue-500 hover:underline">

                    Book 2
                </Link>
            </li>
        </ul>
    </div>
  );
}
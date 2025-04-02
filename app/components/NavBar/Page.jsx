import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

export function NavBar() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-gray-400">
      <Link href="/" className="text-xl font-bold text-white">GameStore</Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white">Store</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white">Categories</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white">New Releases</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white">Deals</Link>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-6">
        <Search className="w-6 h-6 cursor-pointer hover:text-white" />
        <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-white" />
        <User className="w-6 h-6 cursor-pointer hover:text-white" />
      </div>
    </header>
  );
}

export default NavBar;

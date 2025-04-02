"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-md rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search for games..."
        className="w-full bg-transparent border-none outline-none px-2 text-gray-600 placeholder-gray-400"
      />
    </div>
  );
}
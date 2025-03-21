import React, { useState } from "react";
import { Search } from "lucide-react"; // Import search icon

const tiles = [
  {
    id: 1,
    name: "Marble Classic",
    category: "Floor Tiles",
    size: "60x60 cm",
    code: "MC-001",
    price: 25,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Granite Elite",
    category: "Natural Granite",
    size: "80x80 cm",
    code: "GE-002",
    price: 30,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Porcelain White",
    category: "Wall Tiles",
    size: "60x120 cm",
    code: "PW-003",
    price: 20,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Ceramic Sand",
    category: "Sanitary Ware",
    size: "40x40 cm",
    code: "CS-004",
    price: 15,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Kitchen Sink Deluxe",
    category: "Kitchen Sink",
    size: "Standard",
    code: "KS-005",
    price: 50,
    img: "https://via.placeholder.com/150",
  },
];

export default function ProductPage() {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTiles = tiles.filter(
    (tile) =>
      (category === "All" || tile.category === category) &&
      tile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">Product Collection</h1>

      {/* Search and Filter */}
      <div className="flex items-center justify-between mb-6">
        {/* Category Filter (Left) */}
        <select
          className="p-2 border rounded-md text-black bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Floor Tiles">Floor Tiles</option>
          <option value="Wall Tiles">Wall Tiles</option>
          <option value="Sanitary Ware">Sanitary Ware</option>
          <option value="Natural Granite">Natural Granite</option>
          <option value="Kitchen Sink">Kitchen Sink</option>
        </select>

        {/* Search Bar (Right) */}
        <div className="relative w-3xs max-w-sm ml-auto">
          <input
            type="text"
            placeholder="Search items..."
            className="p-2 pl-10 border rounded-md text-black bg-white w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <div
              key={tile.id}
              className="dark:bg-gray-900 p-4 rounded-lg shadow-md hover:scale-105 transition text-white"
            >
              <img
                src={tile.img}
                alt={tile.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{tile.name}</h2>
              <p className="text-gray-400">Category: {tile.category}</p>
              <p className="text-gray-400">Size: {tile.size}</p>
              <p className="text-gray-400">Code: {tile.code}</p>
              <p className="text-blue-500 font-bold">₱{tile.price}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-white">No products found.</p>
        )}
      </div>
    </div>
  );
}

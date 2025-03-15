import React from "react";
import product from "../components/Assets/floor_tiles.jpg";
import wallt from "../components/Assets/wall_tiles.jpg";
import sanitary from "../components/Assets/sanitary_ware.jpg";
import granite from "../components/Assets/natural_granite.jpg";
import sink from "../components/Assets/kitchen_sink.jpg";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Floor Tiles",
    image: product,
    description:
      "Enhance your space with high-quality wall tiles, designed for durability and style.",
  },
  {
    id: 2,
    name: "Wall Tiles",
    image: wallt,
    description:
      "Durable and stylish wall tiles designed to elevate any space with elegance and functionality.",
  },
  {
    id: 3,
    name: "Sanitary Ware",
    image: sanitary,
    description:
      "High-quality sanitary ware designed for modern bathrooms, combining style, comfort, and durability.",
  },
  {
    id: 4,
    name: "Natural Granite",
    image: granite,
    description:
      "Premium natural granite known for its durability, elegance, and timeless appeal.",
  },
  {
    id: 5,
    name: "Kitchen Sink",
    image: sink,
    description:
      "Durable and stylish kitchen sinks designed for functionality and modern aesthetics. ",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header
        className="text-center py-10 bg-gradient-to-r from-blue-500 to-[#0842c1] text-white rounded-2xl animate-pulse"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #0842c1 25%, #1e77da 50%, #0842c1 75%)",
          backgroundSize: "400% 400%",
          animation: "gradientAnimation 6s ease infinite",
        }}
      >
        <h1 className="text-4xl font-bold drop-shadow-lg">
          Welcome to HOMMSS!
        </h1>
        <p className="mt-2 text-lg drop-shadow-md">
          Where Comfort Meets Style ✨
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-3xl font-bold mb-6">Discover Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1B1622] rounded-2xl shadow-lg p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-100 text-center">
                {product.name}
              </h3>
              <p className="text-gray-400 mt-2 flex-grow text-sm text-center">
                {product.description}
              </p>
              <div className="flex justify-center items-end mt-auto pt-4">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;

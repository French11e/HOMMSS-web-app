import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Featured Products ✨
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-green-500">
                  ₱{product.price}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedProducts;

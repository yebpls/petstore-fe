import React from "react";
import { Link } from "react-router-dom";

export default function PetCard({ pet }) {
  return (
    <Link
      to={`/pets/pet-detail/${pet.id}`}
      // to={`/detail-item/`}
      className="rounded-md overflow-hidden shadow-md hover:scale-105 duration-150"
    >
      <div className="productCard cursor-pointer bg-white">
        <div className="h-60 overflow-hidden">
          <img
            className="object-cover w-full h-80"
            // src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
            src={`/images/${pet.mainImage}`}
            alt="product"
          />
        </div>
        <div className="p-3">
          <p className="line-clamp-2 text-sm md:text-base h-12">{pet.breed}</p>
          <p className="text-base md:text-lg font-bold text-orange-500 py-2">
            {pet.listPrice}
          </p>
        </div>
      </div>
    </Link>
  );
}

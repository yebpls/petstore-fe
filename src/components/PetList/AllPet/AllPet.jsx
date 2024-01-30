import React from "react";
import PetList from "../PetList";
import { useSelector } from "react-redux";

function AllPet() {
  const { petList } = useSelector((state) => state.petReducer);

  return (
    <div id="AllFeaturedPage" className="bg-neutral-100 px-2 md:px-0 py-4">
      <section className="container mx-auto flex flex-col">
        {/* Section header */}
        <div className="flex justify-center py-4">
          <h1 className="font-bold text-2xl mx-4">
            <span className="text-orange-500">Tất cả</span> thú cưng
          </h1>
        </div>

        {/* Products List */}
        <PetList />

        {/* No product found */}
        {petList === null || petList.length < 1 ? (
          <div className="px-8 py-16">
            <img
              className="w-64 h-64 mx-auto"
              src="images/No_Product_Found.png"
              alt="no product"
            />
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default AllPet;

import React, { useEffect } from "react";
import PetList from "../PetList";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getPetsBySpeciesId } from "../../../redux/slices/petSlice";
import PetCard from "../PetCard";

function AllBySpecies() {
  const { petList } = useSelector((state) => state.petReducer);
  const name = useParams();
  const location = useLocation();
  const id = location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPetsBySpeciesId(id));
  }, [id]);

  return (
    <div id="AllFeaturedPage" className="bg-neutral-100 px-2 md:px-0 py-4">
      <section className="container mx-auto flex flex-col">
        {/* Section header */}
        <div className="flex justify-center py-4">
          <h1 className="font-bold text-2xl mx-4">
            <span className="text-orange-500">All</span> {name.name}s
          </h1>
        </div>

        {/* Products List */}
        <div className="productCardList grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6 xl:gap-6">
          {petList && petList.map((pet) => <PetCard key={pet.id} pet={pet} />)}
        </div>

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

export default AllBySpecies;

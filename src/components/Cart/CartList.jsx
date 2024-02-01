import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartList({ petId }) {
  const { petList, species } = useSelector((state) => state.petReducer);
  const petItem = petList?.filter((pet) => pet.id === petId)[0];
  const speciesName = species?.filter(
    (specie) => specie.id === petItem?.speciesID
  )[0];
  useEffect(() => {
    console.log(petItem, speciesName);
  }, [petItem, speciesName]);
  return (
    <div className="bg-white rounded-sm mt-4">
      <div className="grid grid-cols-9 items-center text-center bg-white rounded-sm p-2 py-4 border-t">
        <div className="col-span-1">
          <input
            type="checkbox"
            //  checked={selected} onChange={() => dispatch(toggleSelectItem({id: id}))}
          />
        </div>
        <Link
          to={`/pets/pet-detail/${petItem?.id}`}
          className="flex items-center col-span-3"
        >
          <p className="font-bold mr-4">{petItem?.breed}</p>

          <img
            className="aspect-square rounded-sm w-24 h-24"
            src={`/images/${petItem?.mainImage}`}
            alt="product"
          />
        </Link>
        <div className="col-span-1">{speciesName?.name}</div>
        <div className="col-span-1">{petItem?.country}</div>
        <div className="col-span-1 font-bold">{petItem?.color}</div>
        <div className="col-span-1">{petItem?.listPrice}</div>

        <div className="col-span-1 text-red-500 hover:text-red-700 duration-200">
          <button
            onClick={() => {
              // dispatch(setShowCartDeleteModal(id));
              // dispatch(setDeleteId(id));
            }}
            className="p-2"
          >
            <FontAwesomeIcon icon={faTrashCan} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;

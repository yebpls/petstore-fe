import React, { useEffect } from "react";
import axiosClient from "../../apis/axiosClient";
import axios from "axios";
import { petApi } from "../../apis/petApi";
import { useDispatch, useSelector } from "react-redux";
import { getAllPet } from "../../redux/slices/petSlice";
import PetCard from "./PetCard";

export default function PetList() {
  const { petList } = useSelector((state) => state.petReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPet());
  }, [dispatch]);
  return (
    <div className="productCardList grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6 xl:gap-6">
      {petList && petList.map((pet) => <PetCard key={pet.id} pet={pet} />)}
    </div>
  );
}

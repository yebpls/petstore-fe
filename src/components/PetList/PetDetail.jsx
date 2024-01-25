import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPetById } from "../../redux/slices/petSlice";
import ProductOverview from "../ProductOverview/ProductOverview";
import ProductDetails from "../ProductOverview/ProductDetails";

function PetDetail() {
  const { pet } = useSelector((state) => state.petReducer);
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPetById(id));
  }, [id]);

  return (
    <div className="bg-gray-200 py-4">
      {pet && (
        <div>
          <div className="container mx-auto">
            <ProductOverview pet={pet} />
          </div>

          <div className="container mx-auto">
            <ProductDetails pet={pet} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PetDetail;

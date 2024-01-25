import { HeartFilled } from "@ant-design/icons";

import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductOverviewAction({ pet }) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="col-span-12 lg:col-span-6">
      <p className="font-extrabold text-3xl text-neutral-700">{pet.breed}</p>

      <p className="text-2xl md:text-4xl font-bold text-orange-400 py-4 md:py-8">
        {pet.listPrice}
      </p>

      <div className={`flex my-4 items-center `}></div>
      <div className="flex py-3 gap-2">
        <button
          className={`grow py-3 shadow font-bold text-neutral-700 bg-sky-200 hover:bg-sky-300 active:bg-sky-200 rounded duration-150 `}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ProductOverviewAction;

import React from "react";
import { useState } from "react";

function ProductDetails({ pet }) {
  return (
    <div className="bg-white col-span-12 lg:col-span-8 p-4 lg:p-8 rounded-md shadow">
      <h1 className="text-2xl font-bold text-left mb-5">Thông tin sản phẩm</h1>
      <div id="detail" className="w-1/2 mb-5">
        <div className="flex justify-start">
          <div className="text-left w-28">
            <p className="font-bold">Phân loại:</p>
          </div>
          <div>
            <p> Chó </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="text-left w-28">
            <p className="font-bold">Tuổi:</p>
          </div>
          <div>
            <p>2</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="text-left w-28">
            <p className="font-bold">Giới tính:</p>
          </div>
          <div>
            <p>Đực</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="text-left w-28">
            <p className="font-bold">Màu sắc:</p>
          </div>
          <div>
            <p>Nâu</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="text-left w-28">
            <p className="font-bold">Trọng lượng:</p>
          </div>
          <div>
            <p>{pet.weight}</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="text-left w-28">
            <p className="font-bold">Kích thước:</p>
          </div>
          <div>
            <p>Không có</p>
          </div>
        </div>
      </div>

      <p id="description" className="mb-3">
        <span className="font-bold">Mô tả chi tiết: {pet.description}</span>
      </p>
    </div>
  );
}

export default ProductDetails;

import React, { useEffect } from "react";
import axiosClient from "../apis/axiosClient";
import axios from "axios";
import { Link } from "react-router-dom";
import PetList from "../components/PetList/PetList";

function HomePage() {
  return (
    <div id="homePage" className="">
      <section className="bg-neutral-100">
        <div className="container mx-auto flex flex-col">
          <div className="flex justify-center py-6">
            <h1 className="font-bold text-2xl mx-4">
              <span className="text-orange-500">Sản Phẩm</span> Nổi Bật
            </h1>
          </div>

          <PetList />
          <Link
            to="/pets"
            className="self-center rounded-sm bg-orange-500 text-white px-4 py-1 block mx-auto my-10"
          >
            XEM THÊM
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-sky-400 to-blue-500">
        <div className="container mx-auto flex flex-col py-4 pb-12">
          <div className="flex flex-col justify-center items-center py-6">
            <h1 className="text-white font-bold text-2xl mx-4">
              <span className="text-orange-500">Kết nối</span> với{" "}
              <span className="text-orange-500">chúng tôi</span>
            </h1>
            <p className="my-8 text-white">
              Hãy để lại liên lạc của bạn để nhận được những thông tin mới nhất!
            </p>
            <div className="flex rounded-sm overflow-hidden w-full max-w-lg">
              <input
                className="p-2 px-6 w-full"
                type="text"
                placeholder="Địa chỉ email của bạn"
              />
              <button className="bg-orange-500 p-2 px-6 font-bold text-xs">
                Gửi
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

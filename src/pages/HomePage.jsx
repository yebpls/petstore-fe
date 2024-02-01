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
    </div>
  );
}

export default HomePage;

import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import storageService from "../config/storageService";
import { jwtDecode } from "jwt-decode";

export default function Header() {
  const navigate = useNavigate();
  // const { role, isLogin } = useSelector((state) => state.accountReducer);

  // const userInformation = useSelector((state) => state.user.userInformation);

  const dispatch = useDispatch();

  const onLogout = () => {
    storageService.removeAccessToken();

    window.location.reload();
  };

  const fetchUser = async () => {
    let token = storageService.getAccessToken();
    if (token) {
      token = jwtDecode(token);
      console.log(token);
    }
  };

  const handleLogout = () => {
    storageService.removeAccessToken();

    storageService.removeRole();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    fetchUser();
  }, []);
  // useEffect(() => {
  //   fetchWishlist()
  // }, [wishList])
  // console.log(wishList)

  return (
    <nav className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-3 md:px-8 md:py-6 lg:py-4 relative">
        <Link to="/" className="flex items-center">
          <img
            src="https://img.freepik.com/premium-vector/pet-shop-cute-puppy-logo-design_680355-30.jpg?w=1060"
            className="h-8 md:h-12 mr-3 rounded-full"
            alt="PetStore"
          />
          <span className="self-center text-base md:text-2xl lg:text-xl font-semibold whitespace-nowrap text-white">
            QS Pet Store
          </span>
        </Link>
        <div className="flex flex-col md:pr-16 lg:pr-24">
          <ul className="hidden md:flex text-white justify-between pt-2">
            <li>
              <Link className="block mx-2">Tất cả</Link>
            </li>
            <li>
              <Link className="block mx-2">Chó</Link>
            </li>
            <li>
              <Link className="block mx-2">Mèo</Link>
            </li>
          </ul>
        </div>

        <div className="absolute top-0 right-0 hidden md:flex text-white text-sm xl:text-base">
          <Link to="/login" className="px-2 pt-8">
            Login
          </Link>
          {/* )} */}

          {/* </> */}
          {/* )} */}
        </div>
      </div>
    </nav>
  );
}

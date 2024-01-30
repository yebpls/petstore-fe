import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import storageService from "../config/storageService";
import { jwtDecode } from "jwt-decode";
import { setIsLogin, setRole } from "../redux/slices/accountSlice";
import { getCartByCartId } from "../redux/slices/cartSlice";
import { getAllSpecies } from "../redux/slices/petSlice";

export default function Header() {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.accountReducer);
  const cartCount = useSelector((state) => state.cartReducer.cart?.length);
  const { cartId } = useSelector((state) => state.cartReducer);
  const { species } = useSelector((state) => state.petReducer);

  // const userInformation = useSelector((state) => state.user.userInformation);

  const dispatch = useDispatch();

  const onLogout = () => {
    storageService.removeAccessToken();
    storageService.removeRole();
    dispatch(setRole(""));
    dispatch(setIsLogin(false));
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    if (cartId) {
      dispatch(getCartByCartId(cartId.id));
    }
  }, [cartId]);

  useEffect(() => {
    dispatch(getAllSpecies());
  }, []);

  useEffect(() => {
    console.log(species);
  }, [species]);

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
              <Link to="/pets" className="block mx-2">
                All{" "}
              </Link>
            </li>
            {species &&
              species.map((specie) => (
                <li>
                  <Link
                    to={`/pets/species/${specie.name.toLowerCase()}`}
                    state={specie.id}
                    className="block mx-2"
                  >
                    {specie.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="absolute top-0 right-0 hidden md:flex text-white text-sm xl:text-base">
          {isLogin ? (
            <div className="flex">
              <Link
                to="/cart"
                className="block px-2 pt-8 mr-1 text-white relative"
                aria-current="page"
              >
                <FontAwesomeIcon icon={faCartShopping} size="1x" />
                <span className="cart-count absolute bottom-3 -right-0.5 text-center text-xs h-4 w-4 rounded-full bg-orange-500">
                  {cartCount}
                </span>
              </Link>
              <button onClick={() => onLogout()} className="px-2 pt-8">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-2 pt-8">
              Login
            </Link>
          )}

          {/* )} */}

          {/* </> */}
          {/* )} */}
        </div>
      </div>
    </nav>
  );
}

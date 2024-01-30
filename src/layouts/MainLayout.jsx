import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartIdById } from "../redux/slices/cartSlice";

function MainLayout() {
  const { userId } = useSelector((state) => state.accountReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getCartIdById(+userId));
    }
  }, [userId]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;

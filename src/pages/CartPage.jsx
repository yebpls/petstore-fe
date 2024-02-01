import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartList from "../components/Cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { getCartByCartId } from "../redux/slices/cartSlice";

function CartPage() {
  const { cart, cartId } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartByCartId(cartId?.id));
  }, []);

  return (
    <div id="cardPage" className="bg-neutral-100 py-6 pb-12">
      <section className="container mx-auto">
        <div className="grid grid-cols-9 text-center bg-white rounded-sm p-2">
          <div className="col-span-1">
            <input
              type="checkbox"
              //  checked={selected} onChange={() => selected ? dispatch(deSelectAllItems()) : dispatch(selectAllItems())}
            />
          </div>
          <div className="col-span-3 text-left font-bold">Breed</div>
          <div className="col-span-1">Species</div>
          <div className="col-span-1">Country</div>
          <div className="col-span-1">Color</div>
          <div className="col-span-1 font-bold">Price</div>
        </div>
        {cart &&
          cart?.map((item) => <CartList key={item?.id} petId={item?.petId} />)}

        <div className="bg-white rounded-sm mt-4 grid grid-cols-9 items-center text-center p-2 drop-shadow-sm">
          <div className="col-span-1">
            <input
              type="checkbox"
              // checked={selected}
              // onChange={() =>
              //   selected
              //     ? dispatch(deSelectAllItems())
              //     : dispatch(selectAllItems())
              // }
            />
          </div>
          <div className="col-span-1 text-left">Chọn tất cả</div>

          <div className="col-span-3">
            Tổng (<span className="font-bold">0</span> sản phẩm):{" "}
            <span className="font-bold">$0</span>
          </div>
          <div className="col-span-2">
            <Link
              to="/cart/checkout"
              className="py-1 px-4 w-full rounded-sm text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-400"
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;

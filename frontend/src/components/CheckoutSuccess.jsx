import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotal } from "../slices/cartSlice";

function CheckoutSuccess() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cart]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-check-circle"
        viewBox="0 0 16 16"
        color="green"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
      </svg>
      <h2 className="mt-3">Checkout Success</h2>
      <p className="text-center">
        Your order has been successfully registered.
      </p>
    </div>
  );
}

export default CheckoutSuccess;

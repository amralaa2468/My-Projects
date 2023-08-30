import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { url } from "../slices/api";
import { clearCart } from "../slices/cartSlice";

function PayButton({ cartItems }) {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
          //dispatch(clearCart());
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        className="btn btn-outline-primary p-2 w-100"
        onClick={() => handleCheckout()}
      >
        Check Out
      </button>
    </>
  );
}

export default PayButton;

import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

function Products() {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeaders>
        <h2>Products</h2>
        <PrimaryButton
          onClick={() => {
            navigate("/admin/products/create-product");
          }}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}

export default Products;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FaUsers, FaStore, FaClipboard, FaTachometerAlt } from "react-icons/fa";

function Dashboard() {
  const auth = useSelector((state) => state.auth);

  if (!auth.isAdmin)
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-x-circle"
          viewBox="0 0 16 16"
          color="red"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <h2 className="mt-3">Access denied</h2>
        <p className="text-center">Only Admin can access this page.</p>
      </div>
    );

  return (
    <StyledDashboard>
      <SideNav>
        <h3>
          <strong>Quick Links</strong>
        </h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active " : "link-inactive"
          }
          to="/admin/summary"
        >
          <FaTachometerAlt /> Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active " : "link-inactive"
          }
          to="/admin/products"
        >
          <FaStore /> Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active " : "link-inactive"
          }
          to="/admin/orders"
        >
          <FaClipboard /> Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active " : "link-inactive"
          }
          to="/admin/users"
        >
          <FaUsers /> Users
        </NavLink>
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
  );
}

export default Dashboard;

const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 700;

    svg {
      margin-right: 0.5rem;
      font-size: 18px;
    }
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;

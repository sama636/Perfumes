import React from "react";
import "./SideMenu.scss";
import { Link } from "react-router-dom";
export default function SideMenu() {
  return (
    <div
      className="SideMenu"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/perfumes">Buy Perfumes</Link>
      <Link to="/exclusive">Exclusive</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

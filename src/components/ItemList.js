import React from "react";
import { NavLink } from "react-router-dom";

function ItemList({ to, name }) {
  return (
    <li>
      <NavLink className="nav-link" to={to}>
        <h5>{name}</h5>
      </NavLink>
    </li>
  );
}

export default ItemList;

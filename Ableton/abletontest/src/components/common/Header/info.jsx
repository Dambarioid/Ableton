import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../scss/Header/Info.scss";
export function Info() {
  const [test, setTest] = useState("More+");
  const ListOfUl = ["Live", "Push", "Note", "Link", "Shop", "Packs", "Here"];
  return (
    <ul className="ListOfSet">
      {ListOfUl.map((el) => (
        <li>
          <NavLink to={el}>{el}</NavLink>
        </li>
      ))}
      <li>
        <NavLink to="/More"></NavLink>
      </li>

      <li>
        <NavLink to="/Reg" onClick={() => setTest("More-")}>
          Try Live for free
        </NavLink>
      </li>
      <li>
        <NavLink to="/Reg">Log in or register</NavLink>
      </li>
    </ul>
  );
}

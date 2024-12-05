import { NavLink } from "react-router-dom";
import "../../../../scss/MainPart/UnderHead.scss";
export function UnderHead() {
  return (
    <div className="UnderHead">
      <ul className="UnderHeadInfo">
        <li>
          <NavLink
            className="About"
            to=""
            style={({ isActive }) => ({ color: isActive ? "black" : "orange" })}
          >
            About
          </NavLink>
        </li>
        <li className="MustBeChanged">
          <NavLink
            className="Jobs"
            to="Jobs"
            style={({ isActive }) => ({ color: isActive ? "black" : "orange" })}
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Apprenticeships"
            to="As"
            style={({ isActive }) => ({ color: isActive ? "black" : "orange" })}
          >
            Apprenticeships
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

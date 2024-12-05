import { NavLink } from "react-router-dom";
import "../../../scss/MainPart/UnderHead.scss";
export function UnderHeadLink() {
    return (
        <div className="UnderHead">
            <ul className="UnderHeadInfo">
                <li>
                    <NavLink
                        className="WhatIsLink"
                        to=""
                        style={({ isActive }) => ({ color: isActive ? "black" : "orange" })}
                    >
                        What is Link?
                    </NavLink>
                </li>
                <li className="MustBeChanged">
                    <NavLink
                        className="LinkProducts"
                        to="ProductsLink"
                        style={({ isActive }) => ({ color: isActive ? "black" : "orange" })}
                    >
                        Link-enabled products
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

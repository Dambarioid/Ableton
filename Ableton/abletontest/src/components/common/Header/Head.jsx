import "../../../scss/Header/Head.scss";
import { Info } from "./info";
import Logo from "../../../assets/svg/AbletonLogo.svg";
import { More } from "../More/More";
export function Head() {
  return (
    <header>
      <a href="" className="LinkLogo">
        <img
          src={Logo}
          style={{ width: "60px", height: "28px" }}
          className="Logo"
        />
      </a>
      <Info />
      <More />
    </header>
  );
}

import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Head } from "./components/common/Header/Head.jsx";
import "./index.scss";
import { MainBlockAnim } from "./components/common/Animation/AnimationStart/MainAnimBlock.jsx";
import { Footer } from "./components/common/Footer/Footer.jsx";
import { Auth } from "./components/Auth/Auth.jsx";
import { Control } from "./components/AboutPage/Controlfile.jsx";
import { ControlLink } from "./pages/Link/LinkControl.jsx";

const root = ReactDOM.createRoot(document.getElementById("Root"));
root.render(
  <BrowserRouter>
    <MainBlockAnim />
    <div className="SiteDiv">
      <Head />
      <Routes>
        <Route path="/Link/*" element={<ControlLink />}></Route>
        <Route path="/About/*" element={<Control />}></Route>
        <Route path="Reg" element={<Auth />}></Route>
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

import { Route, Routes } from "react-router-dom";
import { LinkPage } from "./Link";
import { UnderHeadLink } from "./UnderheadLink/UnderheadLink";
export function ControlLink() {
  return (
    <>
      <UnderHeadLink />
      <Routes>
        <Route path="" element={<LinkPage />}></Route>
      </Routes>
    </>
  );
}

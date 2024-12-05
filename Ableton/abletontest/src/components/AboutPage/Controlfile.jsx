import { Route, Routes } from "react-router-dom";
import { Main } from "./MainPart/Main";
import { JobsTest } from "./MainPart/Jobs/Jobs";
import { UnderHead } from "./MainPart/UnderHead/UnderHead";
import { Apprenticeships } from "../../pages/Apprenticeships";

export function Control() {
  return (
    <>
      <UnderHead />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="Jobs" element={<JobsTest />} />
        <Route path="As" element={<Apprenticeships />} />
      </Routes>
    </>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "@/components/section/Header";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { Skills } from "@/pages/Skills";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/sm-porfolio/" element={<Home />} />
          <Route path="/sm-porfolio/projects" element={<Projects />} />
          <Route path="/sm-porfolio/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

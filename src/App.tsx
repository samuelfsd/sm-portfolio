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
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

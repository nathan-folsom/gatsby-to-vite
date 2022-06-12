import Home from "common/src/components/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export type RouterProps = {

};

export default function Router({  }: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

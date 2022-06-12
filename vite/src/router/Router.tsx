import NotFoundPage from "common/src/components/404";
import Compliments, { Compliment } from "common/src/components/compliments/Compliments";
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
        <Route path={"*"} element={<NotFoundPage />} />
        <Route path={"compliment"} element={<Compliments />} />
        <Route path={"comliment/:compliment"} element={<Compliments />} />
      </Routes>
    </BrowserRouter>
  );
}

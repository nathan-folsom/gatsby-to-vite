import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import buildRoutes from "./buildRoutes";

export type RouterProps = {

};

export default function Router({  }: RouterProps) {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <Routes>
      {buildRoutes().map(r => <Route key={r.path} path={r.path} element={<r.Component location={location} />} />)}
    </Routes>
  );
}
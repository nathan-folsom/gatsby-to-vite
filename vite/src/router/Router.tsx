import React, { ComponentType, lazy, Suspense, useMemo } from "react";
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
  return (
    <Routes>
      {buildRoutes().map(r => <Route key={r.path} path={r.path} element={<LazyElement lazyEl={r.lazyComponent} />} />)}
    </Routes>
  );
}

function LazyElement({ lazyEl }: { lazyEl: () => Promise<{ default: ComponentType<{ location: any }> }>}) {
  const location = useLocation();
  const El = useMemo(() => lazy(lazyEl)
  , []);
  return <Suspense><El location={location} /></Suspense>
}
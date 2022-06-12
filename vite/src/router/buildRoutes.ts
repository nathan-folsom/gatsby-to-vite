import { FunctionComponent } from "react";

export default function buildRoutes(): { path: string, Component: FunctionComponent<{ location: any }> }[] {
  const modules = Object.entries(import.meta.globEager("../pages/**/*"))
    .map(([k,v ]) => ({
      path: k
        .replace("../pages", "")
        .replace("index.tsx", "")
        .replace("[item].tsx", ":item")
        .replace("404.tsx", "*"),
      Component: v.default
    }));

  console.log(modules)

  return modules;
}

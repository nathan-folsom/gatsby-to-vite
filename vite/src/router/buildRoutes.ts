export default function buildRoutes(): { path: string, lazyComponent: any }[] {
  return Object.entries(import.meta.glob("../pages/**/*"))
    .map(([k, v]) => ({
      path: k
        .replace("../pages", "")
        .replace("index.tsx", "")
        .replace("[item].tsx", ":item")
        .replace("404.tsx", "*"),
      lazyComponent: v
    }));
}

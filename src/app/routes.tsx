import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { RootLayout } from "./layouts/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage").then((module) => ({ default: module.HomePage })));
const ShopifyPage = lazy(() => import("./pages/ShopifyPage").then((module) => ({ default: module.ShopifyPage })));
const WixPage = lazy(() => import("./pages/WixPage").then((module) => ({ default: module.WixPage })));
const SquarespacePage = lazy(() =>
  import("./pages/SquarespacePage").then((module) => ({ default: module.SquarespacePage })),
);
const BubblePage = lazy(() => import("./pages/BubblePage").then((module) => ({ default: module.BubblePage })));

function PageLoader() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-950 text-white">
      <div className="h-2 w-32 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-cyan-300" />
      </div>
    </div>
  );
}

function lazyPage(element: JSX.Element) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: lazyPage(<HomePage />) },
      { path: "shopify", element: lazyPage(<ShopifyPage />) },
      { path: "wix", element: lazyPage(<WixPage />) },
      { path: "squarespace", element: lazyPage(<SquarespacePage />) },
      { path: "bubble", element: lazyPage(<BubblePage />) },
    ],
  },
]);

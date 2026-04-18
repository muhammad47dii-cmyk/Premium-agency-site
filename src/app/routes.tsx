import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ShopifyPage } from "./pages/ShopifyPage";
import { WixPage } from "./pages/WixPage";
import { SquarespacePage } from "./pages/SquarespacePage";
import { BubblePage } from "./pages/BubblePage";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shopify", element: <ShopifyPage /> },
      { path: "wix", element: <WixPage /> },
      { path: "squarespace", element: <SquarespacePage /> },
      { path: "bubble", element: <BubblePage /> },
    ],
  },
]);

import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SamplePage from "../pages/sample/SamplePage";
import AboutPage from "../pages/about/AboutPage";
import MainLayout from "../layouts/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailPage from "../pages/home/DetailPage";
import CastPage from "../pages/sample/CastPage";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/popular",
        element: <SamplePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/casts/:id",
        element: <CastPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const AppRoutes = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default AppRoutes;

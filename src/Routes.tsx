import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import WomenSection from "./pages/WomenSection";
import HomeSection from "./pages/HomeSection";
import NotFound from "./components/NotFound";
import MenSection from "./pages/MenSection";
import KidsSection from "./pages/KidsSection";
import BeautySection from "./pages/BeautySection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomeSection />,
            },
            {
                path: 'women',
                element: <WomenSection />,
            },
            {
                path: 'men',
                element: <MenSection />,
            },
            {
                path: 'kids',
                element: <KidsSection />,
            },
            {
                path: 'beauty',
                element: <BeautySection />,
            },
        ]

    }
])

export function Routes() {
    return <RouterProvider router={router} />
}
import React from "react";
import AppRouting from "./AppRouting/AppRouting";
import "./index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container!);

const router = createBrowserRouter([
    {
        path: '/*',
        element: (
            <AppRouting />
        )
    }
]);

root.render(
    <React.Suspense fallback="loading">
        <RouterProvider router={router} />
    </React.Suspense>
)

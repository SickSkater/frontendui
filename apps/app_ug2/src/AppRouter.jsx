import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
  
// import { UserRouterSegment } from "@hrbolek/uoisfrontend-ug2";
import { Candidate_pagePage } from "candidate_page"; // Adjusted the path to match the correct file name

//co stranka, to jeden dictionary, tech stranek budeme mit vice:
export const Routes = [
    //UserRouterSegment
    {
        //id je precteno z candidatepage.jsx
        path: "/hello/:id",
        element: <Candidate_pagePage/> //komponent, ktery chci aby se zobrazil pri zadani url, pri kliknuti se vlozi i import
    }
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />


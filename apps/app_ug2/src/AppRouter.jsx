
import { ProgramPage, ProgramRouterSegment, SubjectRouterSegment, UserRouterSegment} from "@blacki005/candidate_page";
import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
import { UserPage } from "../../../packages/@blacki005/candidate_page/src/User/Pages/UserPage";
  
// import { UserRouterSegment } from "@hrbolek/uoisfrontend-ug2";

//co stranka, to jeden dictionary, tech stranek budeme mit vice:
export const Routes = [
    // UserRouterSegment
    {
        path: "/hello/:id",
        element: <ProgramPage />
    },
    {
        path: "/user/:id",
        element: <UserPage/>
    },
    ProgramRouterSegment,
    SubjectRouterSegment,
    UserRouterSegment
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />


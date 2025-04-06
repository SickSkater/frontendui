
import { ProgramPage, ProgramRouterSegment, SubjectRouterSegment, UserRouterSegment} from "@blacki005/candidate_page";
import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
import { UserPage } from "../../../packages/@blacki005/candidate_page/src/User/Pages/UserPage";
import { PaymentInfoPage, PaymentInfoRouterSegment } from "../../../packages/@blacki005/candidate_page/src";
  
// import { UserRouterSegment } from "@hrbolek/uoisfrontend-ug2";

//co stranka, to jeden dictionary, tech stranek budeme mit vice:
export const Routes = [
    // UserRouterSegment
    {
        path: "/program/:id",
        element: <ProgramPage />
    },
    {
        path: "/user/:id",
        element: <UserPage/>
    },
    {
        path: "/paymentinfo/:id",
        element: <PaymentInfoPage />
    },
    ProgramRouterSegment,
    SubjectRouterSegment,
    UserRouterSegment,
    PaymentInfoRouterSegment
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />


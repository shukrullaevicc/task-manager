import { useRoutes } from "react-router-dom";
import { Suspense ,lazy } from "react";

import { Loading } from "../utils";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const RouteController = () => {
   return useRoutes([
      {
         path: "",
         element: <Suspense fallback={<Loading/>}><Dashboard/></Suspense>
      }
   ])
}

export default RouteController
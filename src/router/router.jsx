import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import CollegesDetails from "../pages/CollegesDetails/CollegesDetails";
import Admission from "../pages/Admission/Admission";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:'/colleges',
          element:<Colleges></Colleges>,
        },
        {
          path:"/colleges/:id",
          element: <CollegesDetails></CollegesDetails>,
          loader: ({params})=> fetch(`https://mindmeld-academy-server.vercel.app/colleges/${params.id}`)
        },
        {
          path:'/admission',
          element:<Admission></Admission>,
        },
        // {
        //   path:'/signUp',
        //   element:<SignUp></SignUp>
        // },
        // {
        //   path:"/login",
        //   element:<Login></Login>
        // },
        // {
        //   path:'/myProfile/:email',
        //   element:<PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>,
        //   loader:({params})=> fetch(`https://mindmeld-academy-server.vercel.app/myProfile/${params.email}`)
        // },

        // {
        //   path:'/myCollege/:email',
        //   element:<PrivateRoutes><MyCollege></MyCollege> </PrivateRoutes>,
        //   loader:({params})=> fetch(`https://mindmeld-academy-server.vercel.app/myCollege/${params.email}`)
        // }
        
      ],
    },
  ]);
  export default router;
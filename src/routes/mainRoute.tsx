import {createBrowserRouter} from "react-router-dom"
import { Layout } from "../components/block/Layout"
import Landingpages from "../pages/Landingpages"

export const mainRoute = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
          {
            index: true,
            element: <Landingpages/>
          }
        ]
    }
])

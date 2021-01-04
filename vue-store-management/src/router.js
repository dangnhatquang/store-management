import AboutUs  from "./components/aboutUs"
import Home from "./components/home"
import Products from "./components/product"

export default [
    {
        path:'/aboutUs',
        component: AboutUs
    },
    {
        path:'/',
        component: Home
    },
    {
        path:'/products',
        component: Products
    },
    {
        path:'/phones',
        component: Products
    },
    {
        path:'/tablets',
        component: Products
    },
    {
        path:'/laptops',
        component: Products
    },
]
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/home/homePage";

const publicRouters = [
    { path: '/login', component: Login, keyPage: 'login'},
    { path: '/register', component: Register, keyPage: 'register'}
]

const privateRouters = [
    { path: '/', component: Home, keyPage: 'home'}
]

export { publicRouters, privateRouters }
import Albums from "../pages/albums/index";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/home/HomePage";

const publicRouters = [
    { path: '/login', component: Login, keyPage: 'login' },
    { path: '/register', component: Register, keyPage: 'register' }
]

const privateRouters = [
    { path: '/', component: Home, keyPage: 'home' },
    { path: '/album', component: Albums, keyPage: 'album' }
]

export { publicRouters, privateRouters }
//Pages
import Home from '@/pages/Home/';
import Detail from '@/pages/Detail/';

import Products from '@/pages/Products/';
import Cart from '@/pages/Cart/';

//Layout
// import { HeaderOnly } from '~/layouts';

//config
import config from '@/config/';

//public routes:
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.products, component: Products },
    { path: config.routes.cart, component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

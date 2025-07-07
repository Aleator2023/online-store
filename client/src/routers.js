// routers.js
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

import {
  AdminRoute,
  BasketRoute,
  ShopRoute,
  LoginRoute,
  RegistrationRoute,
  DeviceRoute
} from "./utils/consts";

export const authRoutes = [
  { path: AdminRoute, element: <Admin /> },
  { path: BasketRoute, element: <Basket /> },
];

export const publicRoutes = [
  { path: ShopRoute, element: <Shop /> },
  { path: LoginRoute, element: <Auth /> },
  { path: RegistrationRoute, element: <Auth /> },
  { path: DeviceRoute + "/:id", element: <DevicePage /> },
];
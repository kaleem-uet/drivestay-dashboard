import { useRoutes } from "react-router-dom";
import SignIn from "../pages/SIgnIn";

import AdminLayout from "../layouts/adminLayout";
import OverView from "../pages/OverView";
import Categories from "../pages/Categories";
import Users from "../pages/Users";
import Listing from "../pages/Listing";
import Booking from "../pages/Booking";
import UserVerifications from "../pages/UserVerifications";
import PushNotifications from "../pages/PushNotifications";
import AdminNotifications from "../pages/AdminNotifications";
import Payments from "../pages/Payments";
import UserTaxes from "../pages/UserTaxes";
import AddCategories from "../pages/AddCategories";
import PaymentDetails from "../pages/PaymentDetails";
import NotificationDetail from "../pages/NotificationDetails";

function CustomRouts() {
  const router = useRoutes([
    { path: "/", element: <SignIn /> },
    {
      path: "/dashboard",
      element: <AdminLayout />,
      children: [
        { path: "/dashboard", element: <OverView /> },
        { path: "categories", element: <Categories /> },
        { path: "users", element: <Users /> },
        { path: "listings", element: <Listing /> },
        { path: "bookings", element: <Booking /> },
        { path: "userverifications", element: <UserVerifications /> },
        { path: "pushnotifications", element: <PushNotifications /> },
        { path: "adminnotifications", element: <AdminNotifications /> },
        { path: "payments", element: <Payments /> },
        { path: "usertaxes", element: <UserTaxes /> },
        { path: "addcategories", element: <AddCategories /> },
        { path: "payments-detail", element: <PaymentDetails /> },
        { path: "adminnotification-detail", element: <NotificationDetail /> },

      ],
    },
  ]);
  return router;
}

export default CustomRouts;

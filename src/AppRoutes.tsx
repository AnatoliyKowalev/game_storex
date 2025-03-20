import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthRequired from "./components/routes/AuthRequired";
import { Home, Orders, Order, SignIn, NotFound } from "./pages";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRequired />}>
          <Route path="orders" element={<Orders />} />
          <Route path="order/:id?" element={<Order />} />
        </Route>
        <Route path="/" index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

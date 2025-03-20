import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "@/redux";

const AuthRequired: FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AuthRequired;

import { FC, createContext, useEffect, PropsWithChildren } from "react";

import { setUser } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

export const UserContext = createContext<undefined>(undefined);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, email } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  // Check localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    if (!!storedEmail) {
      dispatch(setUser({ email: storedEmail }));
    }
  }, []);

  // Persist user data to localStorage when they log in or log out
  useEffect(() => {
    if (isAuthenticated && email) {
      localStorage.setItem("email", email);
    }
  }, [email, isAuthenticated]);

  return (
    <UserContext.Provider value={undefined}>{children}</UserContext.Provider>
  );
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

const storageEmail = localStorage.getItem("email")!;

interface UserState {
  email: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  email: storageEmail,
  isAuthenticated: !!storageEmail,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
      state.isAuthenticated = true;

      toast.success(`Hello ${action.payload.email}`);
    },
    clearUser: (state, action: PayloadAction<string | undefined>) => {
      state.email = null;
      state.isAuthenticated = false;

      localStorage.removeItem("email");
      action.payload && toast.error(action.payload);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

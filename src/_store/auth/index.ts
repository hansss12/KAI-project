import { createSlice } from "@reduxjs/toolkit";
import { LoginI, Profile, User } from "../../interfaces/login";

export interface AuthStateI {
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: { token: number; refreshToken: number };
  user?: Profile;
}

const initialState: AuthStateI = {
  accessToken: undefined,
  user: undefined,
  expiresIn: undefined,
  refreshToken: undefined,
};

type LoginInfoPayload = {
  payload: LoginI;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveTokenAuth: (state: AuthStateI, { payload }: LoginInfoPayload) => {
      state.accessToken = payload.data.token;
      state.user = payload.data.profile;
      state.expiresIn = payload.data.expiresIn;
      state.refreshToken = payload.data.refreshToken;
    },
    deleteTokenAuth: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.expiresIn = undefined;
      state.refreshToken = undefined;
    },
  },
});

export const { saveTokenAuth, deleteTokenAuth } = authSlice.actions;

export default authSlice.reducer;

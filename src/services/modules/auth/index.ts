import { LoginI, LoginReqI } from "../../../interfaces/login";
import { Api } from "../../api";

export const userApi = Api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginI, LoginReqI>({
      query(body) {
        return {
          url: "/auth/login",
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = userApi;

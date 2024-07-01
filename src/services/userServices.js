import { toast } from "react-toastify";
import { instance } from "./instance";

const userServices = {
  submit: async (email) => {
    return await instance.put(`/users/forgot`, {
      email,
    });
  },
  verify: async (key) => {
    return await instance.get(`/users/verify/${key}`);
  },
  reset: async (key, password) => {
    return await instance.put(`/users/reset`, {
      key,
      password,
    });
  },
};

export default userServices;

import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { use, useEffect } from "react";

const instance = axios.create({ baseURL: "http://localhost:5000" });

const useAxiosSequre = () => {
  const { user, signOurUser } = use(AuthContext);

  useEffect(() => {
    const instactor = instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer  ${user?.accessToken}`;
    return config;
  });

  const resInstoctor = instance.interceptors.response.use((respons) => {
    return respons;
  }, (error) => {
    const status = error?.status;

    if(status === 401 || status === 403) {
      signOurUser();
    }

  });

  return () => {
    instance.interceptors.request.eject(instactor);
    instance.interceptors.response.eject(resInstoctor);
  }

  }, [user?.accessToken, signOurUser]);

  return instance;
};

export default useAxiosSequre;

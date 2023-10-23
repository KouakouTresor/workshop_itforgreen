import Axios, { AxiosInstance } from "axios";

const createInstance = (): AxiosInstance => {
  const instance = Axios.create();
  instance.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  return instance;
};

const instance = createInstance();

const get = async (path: string) => {
  try {
    const res = await instance.get(process.env.NEXT_PUBLIC_API + path, {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

const post = async (path: string, body: any) => {
  try {
    const res = await instance.post(process.env.NEXT_PUBLIC_API + path, body, {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

const put = async (path: string, body: any) => {
  try {
    const res = await instance.put(process.env.NEXT_PUBLIC_API + path, body, {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

const remove = async (path: string) => {
  try {
    const res = await instance.delete(process.env.NEXT_PUBLIC_API + path, {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export interface ApiResponse {
  data: any;
  status: number;
  message?: string;
  response: any;
}

export const useApi = {
  get,
  post,
  put,
  remove,
};

import { useApi, ApiResponse } from "./use-api";

const login = async (body: any) => {
  const req: ApiResponse = (await useApi.post(
    "/auth/login",
    body
  )) as ApiResponse;
  return req;
};

const register = async (body: any) => {
  const req: ApiResponse = (await useApi.post(
    "/auth/register",
    body
  )) as ApiResponse;
  return req;
};

const getMe = async () => {
  const req: ApiResponse = (await useApi.get("/auth/get-me")) as ApiResponse;
  return req;
};

const analyticsService = { login, register, getMe };

export default analyticsService;

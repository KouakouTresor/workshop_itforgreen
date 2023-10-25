import { useApi, ApiResponse } from "./use-api";

const getAssociations = async (body: any) => {
  const req: ApiResponse = (await useApi.post(
    "/organization",
    body
  )) as ApiResponse;
  return req;
};

const getAssociationById = async (id: string, body: any) => {
  const req: ApiResponse = (await useApi.post(
    "/organization/" + id,
    body
  )) as ApiResponse;
  return req;
};

const getAssociationsType = async (body: any) => {
  const req: ApiResponse = (await useApi.post(
    "/organization/type",
    body
  )) as ApiResponse;
  return req;
};

const associationsService = {
  getAssociations,
  getAssociationById,
  getAssociationsType,
};

export default associationsService;

import { useApi, ApiResponse } from "./use-api";

const getEvents = async (body: any) => {
  const req: ApiResponse = (await useApi.post("/event", body)) as ApiResponse;
  return req;
};

const getEventById = async (id: string, body: any) => {
  const req: ApiResponse = (await useApi.post(
    "/event/" + id,
    body
  )) as ApiResponse;
  return req;
};

const eventsService = {
  getEvents,
  getEventById,
};

export default eventsService;

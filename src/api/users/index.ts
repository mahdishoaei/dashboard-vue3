import { applicationPath } from "@/services/applicationPath";

export const GetUsers = async () => {
  const request = await fetch(
    `${applicationPath.BASE_URL}${applicationPath.USERS.GET}`
  );
  const response: any = request.json();
  return response;
};

export const updateUser = async (id: any, param: any) => {
  const response = await fetch(
    `${applicationPath.BASE_URL}${applicationPath.USERS.PUT}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(param),
    }
  );
  return response;
};

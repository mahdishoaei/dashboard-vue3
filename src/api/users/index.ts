import { applicationPath } from "@/services/applicationPath";

export const GetUsers = async () => {
  const request = await fetch(
    `${applicationPath.BASE_URL}${applicationPath.USERS.GET}`
  );
  const response: any = request.json();
  return response;
};

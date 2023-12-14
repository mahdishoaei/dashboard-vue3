import { applicationPath } from "@/services/applicationPath";

export const updateUser = async (id: any, param: any) => {
    const requestOptions = {
        method: "PUT",
        body: JSON.stringify(param)
      };

    const response = await fetch(
      `${applicationPath.BASE_URL}${applicationPath.USERS.PUT}/${id}`, requestOptions
    );
    return response;

  }
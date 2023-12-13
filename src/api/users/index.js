import { applicationPath } from "@/services/applicationPath";
import axios from "axios";

export const GetUsers = async () => {
  const response = await axios.get(
    `${applicationPath.BASE_URL}${applicationPath.USERS.GET}`
  );
  return response.data;
};

export const UpdateUser = async (id, param) => {
  const response = await axios.put(
    `${applicationPath.BASE_URL}${applicationPath.USERS.PUT}/${id}`,
    {
      id: param.id,
      email: param.email,
      password: param.password,
      role: param.role,
      token: param.token,
    }
  );

  return response;
};

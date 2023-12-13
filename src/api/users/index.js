import { applicationPath } from "@/services/applicationPath";

export const GetUsers = async () => {
  const request = await fetch(
    `${applicationPath.BASE_URL}${applicationPath.USERS.GET}`,
    { method: "GET" }
  );
  const response = request.json();
  return response;
};

export const UpdateUser = async (id, param) => {
  // const result : any = {
  //   email: param.email,
  //   id: param.id,
  //   password: param.password,
  //   role: param.role,
  //   token: param.token,
  // };
  console.log(id, param);

  const response = await fetch(
    `${applicationPath.BASE_URL}${applicationPath.USERS.PUT}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(param),
    }
  );
  return response;
};

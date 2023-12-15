import { usersDS } from "@/stores/usersDS";

export const detectedUserByEmail = async (email) => {
  const usersDSModule = usersDS();
  const targetUser = await usersDSModule.users.find((user) => {
    return user.email == email;
  });
  if (targetUser) {
    return { flag: true, ...targetUser };
  } else {
    return false;
  }
};

export const detectedUserByToken = async (token) => {
  const usersDSModule = usersDS();
  if (token) {
    const targetUser = await usersDSModule.users.find((user) => {
      return user.token == token;
    });
    if (targetUser) {
      return { flag: true, ...targetUser };
    } else {
      return { flag: false };
    }
  } else {
    return { flag: false };
  }
};

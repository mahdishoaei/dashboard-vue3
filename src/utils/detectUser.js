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

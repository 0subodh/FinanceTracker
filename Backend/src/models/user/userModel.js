import userSchema from "./userSchema.js";

// CRUD Operations for User

export const insertUser = (userObj) => {
  return userSchema(userObj).save();
};

export const getUserByEmail = async (email) => {
  const user = await userSchema.findOne({ email });
  return user;
};

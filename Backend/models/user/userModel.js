import userSchema from "./userSchema.js";

// CRUD Operations for User

export const insertUser = (userObj) => {
  return userSchema(userObj).save();
};

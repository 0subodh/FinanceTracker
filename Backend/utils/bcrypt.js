import bcrypt from "bcryptjs";

export const generateHash = (plainPassword) => {
  return bcrypt.hashSync(plainPassword);
};

export const comparePassword = (plainPassword, hash) => {
  return bcrypt.compareSync(plainPassword, hash);
};

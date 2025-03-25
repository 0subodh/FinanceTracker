import bcrypt from "bcryptjs";

export const generateHash = async (plainPassword) => {
  try {
    const hash = await bcrypt.hash(plainPassword, 10);
    return hash;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
};

export const comparePassword = async (plainPassword, hash) => {
  try {
    return await bcrypt.compare(plainPassword, hash);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw error;
  }
};

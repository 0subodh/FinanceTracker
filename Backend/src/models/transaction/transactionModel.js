import transactionSchema from "./transactionSchema.js";

export const insertTransaction = (transactionObj) => {
  return transactionSchema(transactionObj).save();
};

export const getTransactions = (userId) => {
  return transactionSchema.find({ userId });
};

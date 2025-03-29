import {
  insertTransaction,
  getTransactions,
} from "../../models/transaction/transactionModel.js";

export const createTransaction = async (req, res) => {
  try {
    const { _id } = req.user;
    req.body.userId = _id;
    const transaction = await insertTransaction(req.body);

    if (transaction?._id) {
      res.json({
        status: "success",
        message: "TODO insert new transaction",
        data: req.body,
      });
    } else {
      res.json({
        status: "error",
        message: "Unable to add new transaction",
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const { _id } = req.user;
    if (!_id) {
      throw new Error("Invalid User");
    }
    const transactions = (await getTransactions(_id)) || [];
    res.json({
      status: "success",
      message: `${transactions.length} transactions found`,
      data: transactions,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

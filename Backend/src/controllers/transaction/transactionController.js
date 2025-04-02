import {
  insertTransaction,
  getTransactions,
  deleteTransactions,
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

export const deleteTransaction = async (req, res) => {
  try {
    // 1. receive ids[] and _id of the user
    // 2. perform the deletion query
    const { _id } = req.user;
    const ids = req.body;

    console.log(ids, _id);
    const result = await deleteTransactions(ids, _id);
    console.log(result);

    res.json({
      status: "success",
      message: `Deleted ${result.deletedCount} transactions`,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

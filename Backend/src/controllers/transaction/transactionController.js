import { insertTransaction } from "../../models/transaction/transactionModel.js";

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
    console.log(error);
  }
};

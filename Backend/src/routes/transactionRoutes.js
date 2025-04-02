import express from "express";
import {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
} from "../controllers/transaction/transactionController.js";

const router = express.Router();

router.post("/", createTransaction);
router.get("/", getAllTransactions);
router.delete("/", deleteTransaction); // one or multiple transactions

export default router;

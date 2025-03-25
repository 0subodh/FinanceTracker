import { useState } from "react";
import { financialQuotes } from "../data/financialQoutes";
import { TfiMoney } from "react-icons/tfi";

export default function FinancialTips() {
  const [showQuote, setShowQuote] = useState(financialQuotes[0]);
  const { quote, author } = showQuote;

  setInterval(() => {
    const random = Math.floor(Math.random() * financialQuotes.length);
    setShowQuote(financialQuotes[random]);
  }, 5000);

  return (
    <div>
      <div className="mb-5">
        <TfiMoney className="text-success " style={{ fontSize: "7.5rem" }} />
      </div>
      <h3 className="mb-4">Keep Learning and Stay Informed</h3>
      <p>&quot;{quote}&quot;</p>
      <p> - {author}</p>
    </div>
  );
}

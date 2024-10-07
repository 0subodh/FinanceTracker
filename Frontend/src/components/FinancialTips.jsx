import { useState } from "react";
import { financialQuotes } from "../data/financialQoutes";

export default function FinancialTips() {
  const [showQuote, setShowQuote] = useState(financialQuotes[0]);
  const { quote, author } = showQuote;

  setInterval(() => {
    const random = Math.floor(Math.random() * financialQuotes.length);
    setShowQuote(financialQuotes[random]);
  }, 5000);

  return (
    <div>
      <h3 className="mb-4">Keep Learning and Stay Informed</h3>
      <p>&quot;{quote}&quot;</p>
      <p> - {author}</p>
    </div>
  );
}

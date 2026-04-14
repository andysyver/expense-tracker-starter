function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpenses;

  const formatCurrency = (val) => {
    const abs = Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return val < 0 ? `-$${abs}` : `$${abs}`;
  };

  return (
    <div className="summary">
      <div className="summary-card income">
        <div className="icon">&#8593;</div>
        <div className="label">Income</div>
        <div className="value">{formatCurrency(totalIncome)}</div>
      </div>
      <div className="summary-card expense">
        <div className="icon">&#8595;</div>
        <div className="label">Expenses</div>
        <div className="value">{formatCurrency(totalExpenses)}</div>
      </div>
      <div className="summary-card balance">
        <div className="icon">&#9670;</div>
        <div className="label">Balance</div>
        <div className="value">{formatCurrency(balance)}</div>
      </div>
    </div>
  );
}

export default Summary;

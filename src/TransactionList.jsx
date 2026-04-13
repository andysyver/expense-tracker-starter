import { useState } from 'react'

const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

const categoryIcons = {
  food: "\uD83C\uDF54",
  housing: "\uD83C\uDFE0",
  utilities: "\u26A1",
  transport: "\uD83D\uDE97",
  entertainment: "\uD83C\uDFAC",
  salary: "\uD83D\uDCBC",
  other: "\uD83D\uDCCC",
};

function TransactionList({ transactions, onDeleteTransaction }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filteredTransactions = transactions;
  if (filterType !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.type === filterType);
  }
  if (filterCategory !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.category === filterCategory);
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="section-card">
      <h2 className="section-title">
        <span className="title-icon">&#9776;</span>
        Transactions
      </h2>
      <div className="filters">
        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select
          className="filter-select"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredTransactions.length === 0 ? (
        <div className="empty-state">No transactions found.</div>
      ) : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(t => (
              <tr key={t.id}>
                <td className="td-date">{formatDate(t.date)}</td>
                <td className="td-description">{t.description}</td>
                <td>
                  <span className="category-badge">
                    {categoryIcons[t.category] || ""} {t.category}
                  </span>
                </td>
                <td className={t.type === "income" ? "amount-income" : "amount-expense"}>
                  {t.type === "income" ? "+" : "\u2212"}${t.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td>
                  <button className="btn-delete" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this transaction?")) {
                      onDeleteTransaction(t.id);
                    }
                  }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionList;

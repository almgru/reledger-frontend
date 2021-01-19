import TransactionTable from "../../features/transactions/transactionTable/TransactionTable";

const dummyData = [
  {
    id: 1,
    from: "Income.Salary",
    amount: 25_000,
    currency: "SEK",
    to: "Asset.Checking",
    date: "2021-10-25",
  },
  {
    id: 2,
    from: "Asset.Checking",
    amount: 5000,
    currency: "SEK",
    to: "Expense.Rent",
    date: "2021-10-29",
  },
  {
    id: 3,
    from: "Asset.Checking",
    amount: 1000,
    currency: "SEK",
    to: "Expense.Insurance",
    date: "2021-10-30",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Reledger</h1>

      <TransactionTable data={dummyData} />
    </div>
  );
}

export default App;

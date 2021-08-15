import Expenses from "./Components/Expenses/Expenses";
import NewExpenseForm from "./Components/NewExpense/NewExpenseForm";
import React, { useState } from "react";

function App() {

  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'NewsPaper',
      amount: 104.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 'e3',
      title: 'Music',
      amount: 399.12,
      date: new Date(2022, 7, 14),
    },
  ];

  const [expenseData, setExpenseData] = useState(initialExpenses)

  const onSaveNewExpense = (expense) => {
    setExpenseData([expense, ...expenseData])
  }
  return (
    <div>
      <NewExpenseForm onAddExpense={onSaveNewExpense} />
      <Expenses expenses={expenseData} />
    </div>
  );
}

export default App;

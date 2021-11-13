import React, {useState} from 'react'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 9, 15)},
  { id: 'e2', title: 'New Desk (wooden)', amount: 694.67, date: new Date(2021, 9, 15)},
  { id: 'e3', title: 'Car Insurance', amount: 595.67, date: new Date(2021, 9, 15)},
  {  id: 'e4', title: 'Life Insurance', amount: 2224.67, date: new Date(2021, 9, 15)}
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}
 
export default App;
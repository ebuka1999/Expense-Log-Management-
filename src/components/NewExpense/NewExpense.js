import React, {useState} from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setisEditing] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
    };

    const startEditingHandler = () => {
        setisEditing(true)
    }

    const stopEditinghandler = () => {
        setisEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} stopEditing = {stopEditinghandler}/>}
        </div>
    )
}

export default NewExpense
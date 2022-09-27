import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isVisible,setisVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const handleFormVisisble = () => {
    setisVisible(true);
  }

  const cancelFormVisible = () => {
    setisVisible(false);
  }

  return (
    <div className='new-expense'>
      {!isVisible && <button onClick={handleFormVisisble}>Add Expense</button>}
      {isVisible && <ExpenseForm onFormVisible={cancelFormVisible} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const getFormdata = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.data(expenseData);
  };
  const [trigger, setTrigger] = useState(true);
  return (
    <div className="new_expense">
        {/* //trigger variable contain boolean value  and is passed to ExpenseForm Component
        //if trigger==false 
            //show Expense form
        //else
            // show Add Expense Button */}
      <div>
          {trigger? <button type='button' onClick={()=>{setTrigger(false)}} style={{ fontWeight: "lighter" }}>Add New Expenses</button>:<ExpenseForm signal={setTrigger} onFetch={getFormdata}/>}
      </div>
    </div>
  );
};
export default NewExpense;

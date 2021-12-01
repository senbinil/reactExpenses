import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  // state for 3 form values
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //state updation
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  // function triggered on form submission
  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      amount:+amount,
      date: new Date(date),
    }; //getting form data

    props.onFetch(formData); //passing form data to parent
    setTitle("");
    setAmount("");
    setDate("");
    props.signal(true); //toggling to expense button
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={titleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button
          type="button"
          onClick={() => {
            props.signal(true); //toggling to expense button
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

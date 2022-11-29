import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022,11,28);
  const expenseTitle = 'Expense Item';
  const expenseAmount = 10;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
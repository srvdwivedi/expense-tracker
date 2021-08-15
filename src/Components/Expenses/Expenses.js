import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { Card } from 'react-bootstrap';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
    // const [expensesData, setExpenses] = useState(expenses);
    // setExpenses(...expensesData, props.expenses)

    const selectedYear = (year) => {
        console.log(year)
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selectedFilterYear={selectedYear} />
            {
                props.expenses.map(item => {
                    return (
                        <ExpenseItem
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                            key={item.id}
                        />
                    )
                })
            }
        </Card>
    );
}

export default Expenses;
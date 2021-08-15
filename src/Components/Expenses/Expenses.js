import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { Card } from 'react-bootstrap';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {

const [filterYear,setFilterYear] = useState('2022')

    const selectedYear = (year) => {
        setFilterYear(year)
    }

    const filteredData = props.expenses.filter( (expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selectedFilterYear={selectedYear} />
            {
                filteredData.map(item => {
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
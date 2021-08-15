import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const initalValue = {
        id : '',
        title: '',
        amount: '',
        date: ''
    }
    const [formData, setFormData] = useState(initalValue)
    const handleTitleChange = (event) => {
        setFormData({
            ...formData,
            title: event.target.value
        })
    }
    const handleAmountChange = (event) => {
        setFormData({
            ...formData,
            amount: event.target.value
        })
    }
    const handleDateChange = (event) => {
        setFormData({
            ...formData,
            date: new Date(event.target.value)
        })
    }
    const handleOnSave = (event) => {
        event.preventDefault()
        props.onAddExpense(formData)
        setFormData(initalValue)
    }

    return (
        <form onSubmit={handleOnSave} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" placeholder="Enter the value" onChange={handleTitleChange} required />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="text" placeholder="Enter the value" onChange={handleAmountChange} required />
                </div>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="date" placeholder="Enter the value" onChange={handleDateChange} required />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

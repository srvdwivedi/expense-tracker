import React, { useState } from 'react'
import './NewExpenseForm.css'

export default function NewExpenseForm(props) {
    const initalValue = {
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
        <div className="new-expense">
            <form onSubmit={handleOnSave} >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" placeholder="Enter the value" onChange={handleTitleChange} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="text" placeholder="Enter the value" onChange={handleAmountChange} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="date" placeholder="Enter the value" onChange={handleDateChange} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </form>
        </div>
    )
}

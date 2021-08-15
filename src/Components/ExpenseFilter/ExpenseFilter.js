import React, { useState } from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {
    const [selectedDateYear, setSelectedYear] = useState('2022')

    const onYearChange = (event) => {
        setSelectedYear(event.target.value)
    }

    props.selectedFilterYear(selectedDateYear)

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={onYearChange}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

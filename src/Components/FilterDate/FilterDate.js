import React from 'react'

const FilterDate = ({date, name, onDateChange}) => {
    return (
        <div className="field">
            <div className="control">
                <input
                    className="input"
                    type="date"
                    onChange={onDateChange}
                    value={date}
                    name={name}
                />
            </div>
        </div>
    )
}

export default FilterDate

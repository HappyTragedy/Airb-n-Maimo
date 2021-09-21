import React from 'react'

const FilterSelect = ({ name, onSelectChange, selected, options }) => {
    const optionsValues = options.map(({ value, name }) =>
        <option value={value}>{name}</option>
    )
    console.log(options)
    return (
        <div className="field">
            <div className="control">
                <div className="select" style={{ width: "100%" }}>
                    <select
                        style={{ width: "100%" }}
                        value={selected}
                        onChange={onSelectChange}
                        name={name}
                    >
                        {optionsValues}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterSelect
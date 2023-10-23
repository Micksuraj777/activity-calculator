import React from 'react'

import "./DropDown.css"

function DropDown({value,items}) {
  return (
    <label>
      <p>{value}</p>
      <select name={value} id={value}>
        {items.map((item, i) => <option key={item} value={item}>{item}</option>
        )}
      </select>
    </label>
  )
}

export default DropDown
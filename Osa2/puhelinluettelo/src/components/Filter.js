import React from "react"

const Filter = ({ value, onChange }) => {
    return (
    <div>
      filter shown wiht
      <input 
      value={value}
      onChange={onChange}/>
    </div>
    )
  }

export default Filter
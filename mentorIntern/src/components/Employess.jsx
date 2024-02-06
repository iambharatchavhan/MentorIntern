import React from 'react'

const Employee = (props) => {
  return (
    <div className='dayOne'>
      <h1 className='emp'>Employee Id:{props.id} _Employee Name:{props.name}  _salary:{props.salary}</h1>

    </div>
  )
}

export default Employee
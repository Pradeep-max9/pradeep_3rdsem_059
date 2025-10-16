import React from 'react'

export default function Fromcomponent({text,value,arr}) {
  return (
     <div>
        <from action="">
            <label htmlFor="">name:</label>
            <input type="text" name="name" id="name" placeholder="enter your name"/>
        </from>
        <h1>{text}</h1>
        <input type="number" value={value} />
        <h1>{arr}</h1>

    </div>
  )
}

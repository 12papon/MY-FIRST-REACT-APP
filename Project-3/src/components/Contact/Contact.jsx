import React, { useState } from 'react'




  const Contact = () => {
    const [value, setValue] = useState(false);
    const persone ={
      color: "green",
      backgroundColor: value ? 'blue' : 'green'
    }
    const myFn = ()=>{

      setValue(!value);
    }
  return (
    <div>
      <button onClick={myFn}>Click</button>
      <div style={persone}>
         Hallo
      </div>
    </div>
  )
}

export default Contact
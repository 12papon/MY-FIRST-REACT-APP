import React from 'react'

const ConditionalStyle = () => {
    const [value, setValue] = React.useState(false);
    const style = {
        padding: '10px',
        border: '2px solid black',
        borderRadius: '7px',
        backgroundColor: value ? 'green' : 'blue'
    }
    const toggle = ()=>{
        setValue(!value);
    }
  return (
    <div className='mt-5'>
      <button onClick={toggle} className='btn'>Make it {value ? 'Normal':'Special'}</button>
      <div style={style} className="mt-4">
            This is {value ? 'Special':'Normal'} text....
      </div>
    </div>
  )
}

export default ConditionalStyle
import React, { useRef, useState } from 'react'

const Forms = () => {
    const nameRaf = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const [value , setValue] = useState('');

    console.log(passRef.current.value);
    
    const submit = (e)=>{
        e.preventDefault();
        if(passRef.current.value.length < 8){
            setValue('Value must gretter than 8');
        }else{
            setValue('');
            nameRaf.current.value = '';
            emailRef.current.value = '';
            passRef.current.value = '';
        }
        console.log(e.target.name.value); 
    }

    
  return (
    <div>
        <form onSubmit={submit} action="" >
            <input ref={nameRaf} type="text" name="name" id="" /><br />
            <input ref={emailRef} type="email" name="email" id="" /><br />
            <input ref={passRef} type="password" name="pass" id="" required /><br />
            <small>{value}</small><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Forms
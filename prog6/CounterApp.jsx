import React,{useState,useEffect} from 'react';

const CounterApp=()=>{
    const[number,setNumber]=useState(0);
    useEffect(() => {
        const initialcountfromserver=100;
        setNumber(initialcountfromserver);
    },[]);

    const increament = () =>{
        setNumber(number+1);
    };

    const decreament=()=>{
        if (number>0) setNumber(number-1);
    }

    const reset = ()=>{
        setNumber(0);
    }

    const double=()=>{
        setNumber(number*2);
    };

    return (
        <div>
            <h1>Number Counter</h1>
            <h2>{number}</h2>
            <br />
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
            <button onClick={reset}>Reset</button>
            <button onClick={double}>Double</button>
        </div>
    );
};
export default CounterApp;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slice/CounterSlice'

const CounterView = () => {
    useSelector(state=>console.log("In counter component, state value: ",state))
    //{counter:{count:0,msg:""}}
    const {count,msg}=useSelector(state=>state.counter)

    //const obj=useSelector(state=>state.counter)
    //console.log("State.obj",obj);
    //let {count,msg}=obj

    let dispatch=useDispatch()

  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={()=>dispatch(increment())}>Increase(+1)</button>
    <button onClick={()=>dispatch(decrement())}>Decrease(-1)</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    {msg && <p>{msg}</p> }
    </>
  )
}

export default CounterView
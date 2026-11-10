import React, { useState }  from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { decrement, increment, reset } from '../counterSlice';
function Counter() {
  const count= useSelector((state)=> state.counter.count);
  const dispatch= useDispatch()
        
          return (
            <div>
              <h1>{count}</h1>
              <button onClick={() => {
                dispatch(increment())
              }}>+</button>
              <button onClick={() => {
                dispatch(reset())
              }}>Reset</button>
              <button onClick={() => {
                dispatch(decrement())
              }}>-</button>
            </div>
  )
}
export default Counter
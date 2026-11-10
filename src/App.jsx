import React, { useEffect, useState } from 'react'
import Counter from './components/Counter'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUser,addUser,editUser,removeUser } from './userSlice'

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users.users)

  useEffect(() => )
 
  return (
    <>
     <Counter />
    </>
  )
}

export default App
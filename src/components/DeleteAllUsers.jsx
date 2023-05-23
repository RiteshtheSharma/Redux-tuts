import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/slices/UserSlice'
const DeleteAllUsers = () => {
  const dispatch = useDispatch()
  const RemoveAllUsers = ()=>{
      dispatch(deleteUsers())
}
  return (
    <button style={{width:'100vw',backgroundColor:'yellow'}} onClick={ RemoveAllUsers}>Delete All Users</button>
  )
}

export default DeleteAllUsers
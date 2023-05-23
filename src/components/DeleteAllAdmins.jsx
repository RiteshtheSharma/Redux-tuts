import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAdmin } from '../store/slices/AdminSlice'
const DeleteAllAdmins = () => {
  const dispatch = useDispatch()
  const RemoveAllAdmins = ()=>{
      dispatch(deleteAdmin())
}
  return (
    <button style={{width:'100vw',backgroundColor:'yellow'}} onClick={ RemoveAllAdmins}>Delete All Admins</button>
  )
}

export default DeleteAllAdmins
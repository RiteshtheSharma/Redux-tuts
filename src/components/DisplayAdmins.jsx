import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeAdmin } from '../store/slices/AdminSlice'
const DisplayAdmins = () => {
  const dispatch = useDispatch();
  const RemoveAdmin= (id)=>{
   dispatch(removeAdmin(id))

  }
 const admins = useSelector((state)=>state.admins) 
  return (
    admins?.map((admin,id)=><li key={id} style={{width:'100%',display:'flex',justifyContent:'space-between',margin:'20px 0'}}><span>{admin}</span><span><button style={{backgroundColor:'pink'}} onClick={()=>{RemoveAdmin(id)}}>remove </button></span></li>)
  )
}

export default DisplayAdmins
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import  removeUser  from '../store/actions'
const DisplayUsers = () => {
  const dispatch = useDispatch();
  const RemoveUser= (id)=>{
   dispatch(removeUser(id))

  }
 const users = useSelector((state)=>state.users) 
  return (
    users?.map((user,id)=><li key={id} style={{width:'100%',display:'flex',justifyContent:'space-between',margin:'20px 0'}}><span>{user}</span><span><button style={{backgroundColor:'pink'}} onClick={()=>{RemoveUser(id)}}>remove </button></span></li>)
  )
}

export default DisplayUsers
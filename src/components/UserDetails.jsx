import React from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';
import fakeUserData from '../api/Index';
const userDetails = () => { 
  const dispatch = useDispatch();
  const AddNewuser =()=>{
 dispatch(addUser(fakeUserData()))
  }
  return (
    <div ><button style={{width:'100vw',backgroundColor:'yellow'}} onClick={AddNewuser}>Add user </button>    
    <div>
<ul >
<DisplayUsers />

</ul>





    </div>
    </div>
  )
}

export default userDetails              
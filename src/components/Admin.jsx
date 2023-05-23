import React from 'react'
import { useDispatch } from 'react-redux'
import DisplayAdmins from './DisplayAdmins'
import { addAdmin } from '../store/slices/AdminSlice'
import fakeUserData from '../api/Index'
import DeleteAllAdmins from './DeleteAllAdmins'
const Admin = () => {
  const dispatch = useDispatch()
  const AddNewAdmin = ()=>{
    dispatch(addAdmin(fakeUserData()))
  }
  return (
    <div ><button style={{width:'100vw',backgroundColor:'yellow'}} onClick={AddNewAdmin}>Add Admin</button>    
    <div>
<ul >
<DisplayAdmins />

</ul>





    </div>
    <DeleteAllAdmins/>
    </div>
  )
}

export default Admin
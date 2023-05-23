import {createSlice} from '@reduxjs/toolkit';
import fakeUserData from '../../api/Index';

const adminSlice = createSlice({name:"admin",
initialState:[],
reducers :{
addAdmin(state,action){
state.push(action.payload)
},
removeAdmin(state,action){
state.splice(action.payload,1)
},
deleteAdmin(state,action){
    //state.splice(0,state.length)  
    return []
    }
}
,
    

}) 
console.log(adminSlice.actions);
export {adminSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {addAdmin} = adminSlice.actions;
export const {removeAdmin} = adminSlice.actions;
export const {deleteAdmin} = adminSlice.actions;


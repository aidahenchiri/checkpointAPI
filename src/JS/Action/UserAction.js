import axios from "axios";
import {GET_USERS} from "../Actiontype/ActionType";

export const getUsers=()=>async dispatch=>{
  try {
    const userArray=await axios.get("https://jsonplaceholder.typicode.com/users");
 dispatch({
  type:GET_USERS,
  payload:userArray.data
 })

}catch(error){
  dispatch({
    type:GET_USERS ,
    payload:error.response.message
   })
}
}
import { GET_USERS } from "../Actiontype/ActionType";

  
const initialState={
    users:[]

}
// pure fuction Movie
const UserReducer =(state=initialState,{type, payload }) => {
    switch (type) {
      case GET_USERS:
        return {...state,users: payload}
            default:
        return state;
    }
  
  
  }
  export default UserReducer;
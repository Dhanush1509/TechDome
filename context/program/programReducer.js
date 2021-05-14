
import {ADD_LAND_SUCCESS,ADD_LAUNCH_SUCCESS,ADD_YEAR} from "../types.js"
const programReducer=(state,action)=>{
switch (action.type) {
    case ADD_YEAR:return{...state,year:action.payload}
    case ADD_LAUNCH_SUCCESS:return{...state,launch_success:action.payload}
    case ADD_LAND_SUCCESS:return{...state,land_success:action.payload}
    default:return{...state}
}
}
export default programReducer;
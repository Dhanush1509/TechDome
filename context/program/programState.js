import React,{useReducer} from "react"
import programReducer from "./programReducer"
import ProgramContext from "./programContext"
import {ADD_LAND_SUCCESS,ADD_LAUNCH_SUCCESS,ADD_YEAR} from "../types.js"
const programState = (props) => {
    const initialState ={
        year:null,
        land_success:null,
        launch_success:null
    }
    const [state,dispatch]=useReducer(programReducer,initialState);
    const addYear=(year)=>{
  
      dispatch({
        type:ADD_YEAR,payload:year
      }); 
    }
    const addLandSuccess=(condition)=>{
       dispatch({
         type: ADD_LAND_SUCCESS,payload:condition
       }); 
    }
    const addLaunchSuccess = (condition) => {
      dispatch({
        type: ADD_LAUNCH_SUCCESS,payload:condition
      });
    };
    return (
      <ProgramContext.Provider
        value={{
        year:state.year,
        launch_success:state.launch_success,
        land_success:state.land_success,
        addLandSuccess,
        addLaunchSuccess,
        addYear
        }}
      >
        {props.children}
      </ProgramContext.Provider>
    );
}

export default programState

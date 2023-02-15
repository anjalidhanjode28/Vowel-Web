import { auth_login, auth_logout, auth_success, auth_error, is_loading } from "./actionType";



export const authlogin = (loginData) => async (dispatch) => {
    dispatch({type : is_loading})
    try {
      console.log(loginData)
      let res = await fetch(`http://localhost:8080/auth/login`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(loginData)
      });
      let data = await res.json();
      console.log(data);
      dispatch({ type: auth_login, payload : {token : data.token, msg : data.msg} });
      // console.log(res.data);
    //   return res.data;
    } catch (error) {
      dispatch({ type: auth_error, payload : { msg : error.msg} });
    }
  };

  export const authSignup = (signupData) => async (dispatch) =>{
    dispatch({type : is_loading})
   try{
    let res = await fetch(`http://localhost:8080/auth/signup`, {
      method : "POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify(signupData)
    });
    let data = await res.json();
    dispatch({ type: auth_success, payload : { msg : data.msg} });
   }catch(error){
    dispatch({ type: auth_error, payload : { msg : error.msg} });
   }
  }
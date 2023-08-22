import React from "react";
import { auth,googleProvider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Auth({setIsAuth}) {

    const handleLoginClick = async() =>{
      try{
        const result = await signInWithPopup(auth,googleProvider);
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true)
      }
      catch(error)
      {
        console.log(error);
      }

   
    }

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div class="bg-dark2 p-8 rounded shadow-md w-96">
        <h1 class="text-2xl font-semibold mb-4 text-nicewhite">Login</h1>
        <button
          id="login-button"
          class="bg-darkpink text-white px-4 py-2 rounded w-full" onClick={handleLoginClick}>
          Login with Google
        </button>
      </div>
      </div>
    
  );
}

export default Auth;

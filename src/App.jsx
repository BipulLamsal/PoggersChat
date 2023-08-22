import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Input from "./components/Input";
export const AppMessagesContext = createContext([]);
// //firebase
// import { auth, googleProvider } from "./config/firebase";
// import firebase from "firebase";
// import {signInWithPopup, signOut } from 'firebase/auth';

function App() {
  // const signInWithGoogle = async () =>
  // {
  //   try
  //   {
  //     await signInWithPopup(auth,googleProvider)
  //   }
  //   catch(err)
  //   {
  //     console.log(`Error : ${err}`)
  //   }

  // }

  const [messages, setMessages] = useState([]);
  return (
    <>
      <main className="flex justify-center">
        <div className="bg-dark1 rounded w-full md:w-3/4 ">
          <div className="container mx-auto">
            <Header></Header>
            <AppMessagesContext.Provider value={{ messages, setMessages }}>
              <Messages></Messages>
              <Input></Input>
            </AppMessagesContext.Provider>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

import Message from "./Message";
import { AppMessagesContext } from "../App";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Auth from "./Auth";
import Cookies from "universal-cookie"; // for auth cookies
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore"; //use to fetch data and query the result
import { db } from "../config/firebase"; // firestore databse connection

const cookies = new Cookies(); // new instance
export const AppMessageEleContext = createContext({}); // element context for message element.


function Messages() {
  const { messages, setMessages } = useContext(AppMessagesContext);
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  //REFRENCE FOR THE MESSAGE COLLECTION IN FIRESTORE
  const messageRef = collection(db, "messages");
  const queryMessages = query(messageRef, orderBy("createdAt", "asc"));
  //SCROLLREF
  const bottomRef = useRef(null);
  useEffect(() => {
    onSnapshot(queryMessages, (snapshot) => {
      let newMessages = [];
      snapshot.forEach((doc) => {
        newMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(newMessages);
    });
  }, []);

  useEffect(()=>{
    bottomRef.current?.scrollIntoView({behavior: 'smooth'}); 
  },[messages])

  return (
    <div className="w-full h-[70vh] overflow-y-auto overflow-x-hidden">
      {isAuth ? (
        messages.map((msgElement) => {
          return (
            
            <AppMessageEleContext.Provider value={{ msgElement }}>
              <Message></Message>
            </AppMessageEleContext.Provider>
          );
        })
      ) : (
        <Auth setIsAuth={setIsAuth}></Auth>
      )}

    <div ref={bottomRef}></div>
    </div>
  );
}
export default Messages;

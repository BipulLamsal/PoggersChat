import Message from "./Message";
import { AuthUserContext } from "../App";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Auth from "./Auth";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore"; //use to fetch data and query the result
import { db } from "../config/firebase"; // firestore databse connection

export const AppMessageEleContext = createContext({}); // element context for message element.

function Messages() {
  const [messages, setMessages] = useState([]);
  const { isAuth, setIsAuth } = useContext(AuthUserContext);
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-[70vh] overflow-y-auto overflow-x-hidden">
      {isAuth ? (
        messages.map((msgElement) => {
          return (
            <AppMessageEleContext.Provider
              value={{ msgElement }}
              key={msgElement.id}
            >
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

import Message from "./Message";
import { AppMessagesContext } from "../App";
import { createContext, useContext, useEffect, useState } from "react";
import Auth from "./Auth";
import Cookies from "universal-cookie";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
const cookies = new Cookies();
export const AppMessageEleContext = createContext({});
function Messages() {
  const { messages, setMessages } = useContext(AppMessagesContext);
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const messageRef = collection(db, "messages");
  const queryMessages = query(messageRef);
  let newMessages = [];
  useEffect(() => {
    
    
    onSnapshot(queryMessages, (snapshot) => {
      snapshot.forEach((doc) => {
        newMessages.push({ ...doc.data(), id: doc.id });
      });
    });
    setMessages(newMessages);
  }, []);

  return (
    <div className="w-full h-[70vh] overflow-y-auto">
      {console.log(messages)}
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
    </div>
  );
}
export default Messages;

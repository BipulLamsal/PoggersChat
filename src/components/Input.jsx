import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { auth, db } from "../config/firebase";
import sendIcon from "../assets/send_icon.png";

function Input() {
  // const { messages, setMessages } = useContext(AppMessagesContext);
  const [message, setMessage] = useState("");
  const messageRef = collection(db, "messages");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = async (e) => {
    e.preventDefault();
    if (message !== "") {
      await addDoc(messageRef, {
        text: message,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        rocket: 0,
        poo: 0,
      });
      setMessage("");
    }
  };

  return (
    <div className="w-full bg-dark1 p-4 rounded-lg">
      <form className="flex gap-5 rounded-lg" onSubmit={handleSendClick}>
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full py-3 px-6 focus:outline-none rounded-full bg-dark2 text-white"
          value={message}
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">
          <img src={sendIcon} alt="Send logo" className=""></img>
        </button>
      </form>
    </div>
  );
}
export default Input;

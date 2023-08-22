import { AppMessagesContext } from "../App";
import { useContext, useState } from "react";

function Input() {
  const { messages, setMessages } = useContext(AppMessagesContext);
  const [message, setMessage] = useState({});

  const handleOnChange = (e) => {
    setMessage({
      user: "Bipul Lamsal",
      message: e.target.value,
    });
  };

  const handleSendClick = () => {
    setMessages([...messages, message]);
    console.log(messages);
  };

  return (
    <div className="w-full bg-dark1 p-4 rounded-lg">
      <div className="flex gap-5 rounded-lg">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full py-3 px-6 focus:outline-none rounded-full bg-dark2 text-white"
          onChange={(e) => handleOnChange(e)}
        />
        <button
          type="button"
          className ="bg-darkpink hover:bg-darkpink text-white py-2 px-4 rounded-lg"
          onClick={handleSendClick}
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default Input;

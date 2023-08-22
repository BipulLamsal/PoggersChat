import Message from "./Message"
import { AppMessagesContext } from "../App"
import { createContext, useContext } from "react"
export const AppMessageEleContext = createContext({});
function Messages()
{
    const { messages }= useContext(AppMessagesContext);
    return(
        <div className="w-full h-[70vh] overflow-y-auto">
            {messages.map((msgElement)=>{
                return <AppMessageEleContext.Provider value={{msgElement}}><Message></Message></AppMessageEleContext.Provider>
            })}

        </div>

    )
}
export default Messages
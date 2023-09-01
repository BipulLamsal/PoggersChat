import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Input from "./components/Input";
import Cookies from "universal-cookie";
export const AuthUserContext = createContext([]);

const cookies = new Cookies(); //instance for the cookies
function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  return (
    <>
      <main className="flex justify-center my-3">
        <div className="bg-dark1 rounded w-full md:w-3/4 items-center">
          <div className="container mx-auto">
            <AuthUserContext.Provider value={{ isAuth, setIsAuth }}>
              <Header></Header>
              <Messages></Messages>
              {isAuth && <Input></Input>}
            </AuthUserContext.Provider>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

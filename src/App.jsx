import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Input from "./components/Input";

function App() {
  return (
    <>
      <main className="flex justify-center">
        <div class="bg-dark1 rounded w-full md:w-3/4 ">
          <div class="container mx-auto">
            <Header></Header>
            <Messages></Messages>
            <Input></Input>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

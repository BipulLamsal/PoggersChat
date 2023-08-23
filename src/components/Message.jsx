import React, { useEffect } from "react";
import MessageInfo from "./MessageInfo";
import MessageButton from "./MessageButton";
import { useContext } from "react";
import { AppMessageEleContext } from "./Messages";
import { motion } from "framer-motion";




function Message() {
  const { msgElement } = useContext(AppMessageEleContext);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      // whileHover={{ scale: 1.01, rotate: 1, transition: { duration: 0.3 }}

    >
      <div className="flex sm:flex-row flex-col px-10 py-4 sm:gap-10 gap-2">
        <MessageInfo></MessageInfo>

          <div className="p-4 bg-dark2 sm:w-5/6 text-nicewhite text-left rounded-md ">
            <div className="hidden sm:flex flex-col text-left">
              <p className="text-darkwhite text-sm font-bold">
                {msgElement.user}
              </p>
              <p className="text-darkwhite text-sm"></p>
            </div>
            {msgElement.text}
            <MessageButton></MessageButton>
          </div>

      </div>
    </motion.div>
  );
}
export default Message;

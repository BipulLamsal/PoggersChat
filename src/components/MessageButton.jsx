import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AppMessageEleContext } from "./Messages";

function MessageButton() {
  const { msgElement } = useContext(AppMessageEleContext);
  const handleOnRocket = async () => {
    const documentRef = doc(db, "messages", msgElement.id);
    try {
      await updateDoc(documentRef, {
        ["rocket"]: msgElement.rocket++,
      });
    } catch (err) {
      console.log("Error Updating the document");
    }
  };
  return (
    <div>
      <div className="flex gap-2 py-2">
        <motion.button whileTap={{ scale: 0.9 }}>
          <div
            className="p-2 bg-dark1 rounded-md cursor-pointer hover:bg-niceblue transition-colors "
            onClick={handleOnRocket}
          >
            🚀 {(msgElement.rocket == 0 )? "" : msgElement.rocket}
          </div>
        </motion.button>
        <div className="p-2 bg-dark1 rounded-md cursor-pointer hover:bg-niceyellow transition-colors">
          💩
        </div>
      </div>
    </div>
  );
}

export default MessageButton;

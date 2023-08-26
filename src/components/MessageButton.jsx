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
        ["rocket"]: msgElement.rocket + 1,
      });
    } catch (err) {
      console.log("Error Updating the document");
    }
  };

  const handleOnPoo = async () => {
    const documentRef = doc(db, "messages", msgElement.id);
    try {
      await updateDoc(documentRef, {
        ["poo"]: msgElement.poo + 1,
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
            🚀 {msgElement.rocket == 0 ? "" : msgElement.rocket}
          </div>
        </motion.button>
        <motion.button whileTap={{ scale: 0.9 }}>
          <div
            className="p-2 bg-dark1 rounded-md cursor-pointer hover:bg-niceyellow transition-colors"
            onClick={handleOnPoo}
          >
            💩 {msgElement.poo == 0 ? "" : msgElement.poo}
          </div>
        </motion.button>
      </div>
    </div>
  );
}

export default MessageButton;

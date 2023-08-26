import React, { useEffect, useState } from "react";
import GetRandomWord from "../utility/GetRandomWord";
import { motion } from "framer-motion";
import { collection, doc, query, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { async } from "@firebase/util";

function ListOutQuery({setIsStartUser}) {
  const { data, loading, error } = GetRandomWord(
    "https://random-word-api.vercel.app/api?words=3"
  );

  const handleOnWordClick = async (value) => {
    try{
      await updateDoc(doc(db, "word", "main"), {
        text: value,
      });
      setIsStartUser(false);
    }
    catch(err)
    {
      console.err(err);
    }

  };
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col bg-darkpink z-100">
      <p className="max-w-sm font-bold text-xl text-white text-center">
        Yay! 🔥 You Got To Select Word For Today!
      </p>
      <div className="flex flex-wrap justify-center p-4 cursor-pointer">
        {data.map((item) => {
          return (
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-dark2 m-4"
                key={item}
                onClick={() => handleOnWordClick(item)}
              >
                <div className="px-6 py-4">
                  <div className="text-base text-white">{item}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ListOutQuery;

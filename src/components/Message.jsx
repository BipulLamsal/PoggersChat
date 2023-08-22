import React from "react";
import MessageInfo from "./MessageInfo";
import MessageButton from "./MessageButton";
import { useContext } from "react";
import { AppMessageEleContext } from "./Messages";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

function Message() {
  const {msgElement} = useContext(AppMessageEleContext);
  return (
    <div className="flex sm:flex-row flex-col px-10 py-4 sm:gap-10 gap-2">
      <MessageInfo></MessageInfo>
      <div className="p-4 bg-dark2 sm:w-5/6 text-nicewhite text-left rounded-md ">
        <div className="hidden sm:flex flex-col text-left">
          <p className="text-darkwhite text-sm font-bold">Bipul Lamsal</p>
          <p className="text-darkwhite text-sm">{ timeAgo.format(new Date() - msgElement.date)}</p>
        </div>
        {msgElement.message}
        <MessageButton></MessageButton>
      </div>
    </div>
  );
}

export default Message;

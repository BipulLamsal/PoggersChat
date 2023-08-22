import React from 'react'

function MessageInfo() {
  return (
    <div className="w-1/10 flex gap-5 items-center sm:items-start ">
    <div className="bg-darkpink rounded-full w-14 h-14  flex justify-center items-center text-slate-50">
      B
    </div>
    <div className="sm:hidden flex-col text-left">
      <p className="text-darkwhite text-sm font-bold">Bipul Lamsal</p>
      <p className="text-darkwhite text-sm">23 min ago</p>
    </div>
  </div>
  )
}

export default MessageInfo
import React from "react";

function Message() {
  return (
    <div className="flex sm:flex-row flex-col px-10 py-4 sm:gap-10 gap-2">
      <div className="w-1/12">
        <div className="bg-darkpink rounded-full w-14 h-14  flex justify-center items-center text-slate-50">
          B
        </div>
      </div>

      <div className="p-4 bg-dark2 sm:w-5/6 text-white text-left rounded-md ">
        This is a random message for testing purposes. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ab aspernatur fugit doloribus earum
        vitae hic praesentium sit, dicta inventore quisquam veniam mollitia,
        eveniet voluptas laudantium porro excepturi sunt quos odio.
      </div>
    </div>
  );
}

export default Message;

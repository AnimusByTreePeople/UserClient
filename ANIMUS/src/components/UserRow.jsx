import React from "react";

export default function UserRow({ user, i }) {
  return (
    <div className=" m-4 p-2 text-slate-300 flex justify-between border md:bg-blend-darken   rounded-lg outline-slate-300  bg-black bg-opacity-25">
      <h1>
        No.{i + 1} : {user.name}
      </h1>
      <h1>{user.score}</h1>
    </div>
  );
}

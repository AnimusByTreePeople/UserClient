import React from "react";
import "./Point.css";

export default function Point() {
  return (
    <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 m-8 rounded-lg bg-gradient-to-r lg:w-1/2  from-green-800 to-teal-900 ">
      <h1>How to get points</h1>
      <br />
      1 point
      <br />
      <ul className="font-lemon">
        <li>
          Take your own reusable bag (200 leafs per bag) to these supermarkets -
          (partnered supermarkets)
        </li>
        <li>
          Refuse to use the polythene bag provided and give them your loyalty
          mobile number (note: this mobile number should be used when creating
          your ANIMUS account)
        </li>
        <li>
          All done!, Now you can use those to Leaf points to Generate new Gaming
          skins and use them in game! (One image will cost you 200 leaf points){" "}
        </li>
        <li>Engjoy!!! ⚽</li>
      </ul>
    </div>
  );
}

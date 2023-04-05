import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 m-8 rounded-lg bg-gradient-to-r lg:w-1/2  from-green-800 to-teal-900 ">
      <h1>About Us</h1>

      <br />
      <ol>
        <li>
          Suraj Wijewickrama &nbsp;&nbsp;&nbsp;&nbsp; w1867065 &nbsp;&nbsp;
          20210294
        </li>
        <li>
          Danilka Akarawita &nbsp;&nbsp;&nbsp;&nbsp; w1867644 &nbsp;&nbsp;
          20210514
        </li>
        <li>
          Vihara Jayaweera &nbsp;&nbsp;&nbsp;&nbsp; w1833638 &nbsp;&nbsp;
          20200480{" "}
        </li>
        <li>
          Chethiya Wijerathne &nbsp;&nbsp;&nbsp;&nbsp; w1914622 &nbsp;&nbsp;
          20211136{" "}
        </li>
        <li>M.S. Umair &nbsp;&nbsp;&nbsp; w1912936 &nbsp;&nbsp; 20210209 </li>
      </ol>
    </div>
  );
}

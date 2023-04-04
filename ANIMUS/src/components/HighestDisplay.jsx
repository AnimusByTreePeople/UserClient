import { getUsers } from "../controller/accountController";
import { useState, useEffect } from "react";
import UserRow from "./UserRow";

const HighestDisplay = () => {
  const [count, setCount] = useState(null);
  const [highest, setHighest] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      const response = await fetch(
        "https://animus-production.up.railway.app/api/accounts/bagcount"
      );
      // `https://animus-production.up.railway.app/api/accounts/bagcount`
      const data = await response.json();
      await getUsers();

      if (data != null) {
        setHighest(data.highest);
        setCount(data.bagCount);
      }
    };
    fetchCount();
  }, []);
  if (count) {
    return (
      <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 m-8 rounded-lg bg-gradient-to-r  text-center  from-green-800 to-teal-900 ">
        <h1 className="self-center font-lemon text-white text-3xl p-2 ">
          {count} bags replaced
        </h1>
        <h1 className="text=2x1 ">Highest contributor of this season</h1>
        <h1 className=" text-center font-lemon text-white text-2xl p-2 ">
          {`${highest.name} `}
          <br />
          {`replacing ${highest.count} bags`}
        </h1>
      </div>
    );
  } else {
    <div>loading...</div>;
  }
};

export default HighestDisplay;

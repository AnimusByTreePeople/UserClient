import { getUsers } from "../controller/accountController";
import { useState, useEffect } from "react";
import UserRow from "./UserRow";
import { async } from "@firebase/util";

const LeaderBoard = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://animus-production.up.railway.app/api/accounts/`
      );
      const data = await response.json();
      await getUsers();

      if (data != null) {
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 m-8 rounded-lg bg-gradient-to-r lg:w-1/2  from-green-800 to-teal-900 ">
      <h1 className="self-center font-lemon text-white text-3xl ">
        LeaderBoard
      </h1>
      {users &&
        users
          .sort((a, b) => {
            if (a.score > b.score) {
              return -1;
            }
          })
          .map((user, i) => <UserRow user={user} i={i} key={i} />)}
    </div>
  );
};

export default LeaderBoard;

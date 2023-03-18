import React, { Component } from "react";
import { getUsers } from "../controller/accountController";
import { useState, useEffect } from "react";
import { UserRow } from "./UserRow";

const LeaderBoard = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = getUsers();
    if (fetch != null) {
      setUsers(fetchUsers);
    }
  }, []);

  return <div>{users && users.map((user) => <UserRow user={user} />)}</div>;
};

export default LeaderBoard;

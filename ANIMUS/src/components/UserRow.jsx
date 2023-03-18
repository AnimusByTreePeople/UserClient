import React, { Component } from "react";
import { useState, useEffect } from "react";

const UserRow = (user) => {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserRow;

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import DashBoard from "../components/DashBoard";
import Footer from "../components/Footer";
import LeaderBoard from "../components/LeaderBoard";
import Splash from "../components/Splash";
import { useAccountContext } from "../hooks/useAccountContext";

export default function Home() {
  const { account, dispatch } = useAccountContext();
  const homeView = (account) => {
    if (account) {
      return <DashBoard account={account} dispatch={dispatch} />;
    } else {
      return <Splash />;
    }
  };

  return (
    <div className="flex flex-col justify-between">
      {homeView(account)}
      <div>
        <LeaderBoard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";

const NoticeBoard = () => {
  const buttonStyle =
    " h-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] p-1 m-1 rounded-lg bg-blend-darken ";
  return (
    <div className="flex flex-col  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 m-8 rounded-lg bg-gradient-to-r from-green-800 to-teal-900">
      <div className="p-3 font-lemon">Let's be responsible and have fun!</div>
      <div className="m-2">
        The game will feature a unique reward system that encourages players to
        adopt sustainable habits in real life. One of the ways players can earn
        rewards is by using reusable bags when shopping.These rewards will be
        designed to educate players on the importance of reducing waste and help
        them understand how small changes in their daily lives can make a big
        impact on the environment. The game will also give players the option to
        share their progress on social media, encouraging friends and family to
        join in and make a difference together.
      </div>
      <div className="flex space-between">
        <NavLink to="/points">
          <button className={buttonStyle}>How to get Points</button>
        </NavLink>

        <NavLink to="https://www.facebook.com/profile.php?id=100090422421731">
          <button className={buttonStyle}>Connect Social media</button>
        </NavLink>
        <NavLink to="/signup">
          <button className={buttonStyle}>Create Game Account</button>
        </NavLink>

        <NavLink to="/assets">
          <button className={buttonStyle}>Game assets</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NoticeBoard;

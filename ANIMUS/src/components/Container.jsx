import React from "react";
import GameAsset from "./GameAsset";
import GameAccount from "./GameAccount";
import SocialMedia from "./SocialMedia";
import GetPoints from "./GetPoints";


function Container() {
  return <div>
    <div className='homebox'> 
    <div>
    <h2> Let's be responsible <br></br> and have fun</h2>
    <p2>The game will have feature a unique reward system that encourages players to adopt sustainable habits in real life. One of the ways players can earn rewards is by using reusable bags when shopping. These rewards will be designed to educate players on the importance of reducing waste and help them understand how small changes in their daily lives can make a big impact on the environment. The game will also givr players the option to share their progress in social media, encouraging friends and family yo join in and make difference together </p2>
    </div>
    <div className="buttons">
    <GetPoints/>
    <SocialMedia/>
    <GameAccount/> 
     <GameAsset/>
    </div>

    

      
    </div>

  </div>;
}

export default Container;

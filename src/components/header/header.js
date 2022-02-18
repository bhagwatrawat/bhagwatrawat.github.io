import React from 'react';
import './header.css';
import {BsInstagram,BsDiscord,BsYoutube,BsFacebook,BsTwitter} from 'react-icons/bs';
import Botx from '../../assets/images/Game-Landing-Page-Vector-removebg-preview.png';
export default function Header() {
  return( 
    <div>
    <div className="_header">
        <div className="_header-container">
          <div>
             <div data-text="BOTxESPORTS" className="header-title">BOTxESPORTS</div>
          </div>
            <div className="header-content">
            <span aria-hidden="true">Where Bots Are Made</span>
             Where Bots Are Made
            <span aria-hidden="true">Where Bots Are Made</span>
            </div>
            <div className="header-socialMedia">
              <a className="instagram"href="https://www.instagram.com/wearebots_00/"  rel="noreferrer" target="_blank"><BsInstagram size={35}/></a>
              <a className="youtube" href="https://www.youtube.com/channel/UC3zij93TIYdXT2EwNsY_qxA"  rel="noreferrer" target="_blank"><BsYoutube size={35}/></a>
              <a className="discord" href="https://discord.gg/C7e5zPxuXx"  rel="noreferrer" target="_blank"><BsDiscord size={35}/></a>
              <a className="facebook" href="https://twitter.com/BotxEsports_00"  rel="noreferrer" target="_blank"><BsFacebook size={35}/></a>
              <a className="twitter" href="https://twitter.com/BotxEsports_00"  rel="noreferrer" target="_blank"><BsTwitter size={35}/></a>
            </div>          
          </div>
          <div className="_header-image"><img src={Botx} alt="image" /></div>
       
        </div>
         <div  id="about"/>
    </div>
  ) 
}

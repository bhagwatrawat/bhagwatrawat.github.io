import React from 'react';
import './footer.css';
import {BsInstagram,BsDiscord,BsYoutube,BsFacebook,BsTwitter} from 'react-icons/bs';
import Logo from '../../assets/images/BotxLogo-removebg-preview.png';
export default function Footer() {
  return(
    <div className="_footer">
        <div className="_footer-logo">
          <img src={Logo} alt="Logo" />
          <div className="_footer-logoname">BOTXESPORTS</div>
        </div>
        <div className="_footer-links_container">
          <div className="_footer-links-socialMedia">
            <h3 className="_footer-socialMedia-title">Follow Us</h3>
            <div className="_footer-socialMedia-icons">
            <a className="instagram"href="https://www.instagram.com/wearebots_00/"  rel="noreferrer" target="_blank"><BsInstagram size={20}/></a>
              <a className="youtube" href="https://www.youtube.com/channel/UC3zij93TIYdXT2EwNsY_qxA"  rel="noreferrer" target="_blank"><BsYoutube size={20}/></a>
              <a className="discord" href="https://discord.gg/C7e5zPxuXx"  rel="noreferrer" target="_blank"><BsDiscord size={20}/></a>
              <a className="facebook" href="https://twitter.com/BotxEsports_00"  rel="noreferrer" target="_blank"><BsFacebook size={20}/></a>
              <a className="twitter" href="https://twitter.com/BotxEsports_00"  rel="noreferrer" target="_blank"><BsTwitter size={20}/></a>
            </div>
          
          </div>
          <div className="_footer-links-site">
            <div className="_footer-site-home"><a href="#home">Home</a></div>
            <div className="_footer-site-about"><a href="#about">About</a></div>
            <div className="_footer-site-content"><a href="#content">Content</a></div>
            <div className="_footer-site-contact"><a href="#contact">Contact us</a></div>
          </div>
        </div>
    </div>
  ) 
}

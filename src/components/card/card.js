import React from 'react';
import './card.css';
import {BsInstagram,BsYoutube,BsFacebook} from 'react-icons/bs';
export default function Card({image,name,content,instagram}) {
  return(
    <div>
       < div className="_card">
          <img className="_card-image" src={image} alt="display pic" />
          <div className="_card-body">
          <div className="_card-title">{name}</div>
          <div className="_card-content">{content}</div>
          <div className="_card-footer">
          <a className="instagram"href={instagram}  rel="noreferrer" target="_blank"><BsInstagram size={18}/></a>
              <a className="youtube" href={instagram}  rel="noreferrer" target="_blank"><BsYoutube size={18}/></a>
              <a className="facebook" href={instagram}  rel="noreferrer" target="_blank"><BsFacebook size={18}/></a>
          </div>
          </div>
       </div>
    </div>
  ) 
}

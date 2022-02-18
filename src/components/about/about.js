import React from 'react';
import './about.css';
import Card from '../card/card';
import Lagger from '../../assets/images/lagger.jpg';
import Croc from '../../assets/images/croc.jpg';
import Pahadi from '../../assets/images/pahadi.jpg';
import Kakashi from '../../assets/images/kakashi.jpg';
import Leo from '../../assets/images/leo.png';
export default function About() {
  return(
    <div className="_about" >
        <div className="_about-intro">
          <div className="_about-intro-title">
            <div/>
            <h2>About Us</h2>
          </div>
          <div className="_about-intro-text">
            <p>BotxEsports was founded during the start of pandemic with one goal in mind to create talented bots as much as possible for the community. We are a team of dedicated and passionate individuals who are dedicated to inspire other to be a part of BotX community
            </p>
          </div>
        </div>
        <div className="_about-content">
          <div className="_about-content-title">
            <div/>
            <h2>Our Members</h2>
          </div>
          <div className="_about-content-text">
            <Card name="Lagger"
            image={Lagger}
            content="Founder and leader of BotxClan .Manages the members of the clan and try best to achieve the goal set by the BotxEsports" 
            instagram="https://instagram.com/bhagwat12uk?utm_medium=copy_link"
            />
            <Card name="CrocBotx"
            image={Croc}
            content="One of the most active member and co-founder of BotxEsports.Also Owner and founder of chaurasiaEsports and entertainment" 
            instagram="https://instagram.com/lokesh080?utm_medium=copy_link"/>
            <Card name="PahadiBotx"
            image={Pahadi}
            content="One of the least active and most experience member of this clan.also one of the co-founder with very less interest towards the community" 
            instagram="https://instagram.com/ravinderkarakoti?utm_medium=copy_link"/>
            <Card name="KakashiBotx"
            image={Kakashi}
            content="Member of our clan and a perfect examples for the Botx Community.We want each and every upcoming member of this clan to learn how to be a bot from him" 
            instagram="https://instagram.com/vijayrawat3229?utm_medium=copy_link"/>
            <Card name="LeoBotx"
            image={Leo}
            content="Entry Fragger of our BGMI line up.Latest and current best player of our clan with most experience in BGMI " 
            instagram="https://instagram.com/nbxleo?utm_medium=copy_link"/>
          </div>
        </div>
        <div id="content"/>
    </div>
  ) 
}

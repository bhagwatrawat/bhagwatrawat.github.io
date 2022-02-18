import React from 'react';
import './content.css';
import YoutubeEmbed from '../youtubeEmbed/youtubeEmbed';
export default function Content() {
  return(
    <div className="_content">
      <div className="_content-underline"/>
      <div className="_content-Header">Check Out Our Content</div>
       <div className="_content-container">
         <YoutubeEmbed 
         title="FPP Tdm Montage"
          creator="LaggerBotx"
          embedId="IYGVvwD44TM" />
         <YoutubeEmbed title="Bot Gameplay Stream"
         creator="LaggerBotx"
         embedId="9_LP1UTopJA"/>
         <YoutubeEmbed
         title="Custom Fight"
         creator="CrocBotx"
         embedId="oXVPAsF7kiM"/>
         <YoutubeEmbed
         title="LeoBotx Gameplay"
         creator="LeoBotx"
         embedId="QFp9OGxv1qU"/>
         <YoutubeEmbed
         title="T3 Custom Highlights"
         creator="CrocBotx"
         embedId="9Mwe8d1fJm8"/>

       </div>
       <div id="contact"/>
    </div>
  ) 
}

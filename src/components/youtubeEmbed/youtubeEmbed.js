import React from 'react';
import './youtubeEmbed.css';
export default function YoutubeEmbed({title,creator,embedId}) {
  return (
    <div className="_youtubeEmbed">
         <iframe
      width="300"
      height="250"
      src={`https://youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Tdm Montage"
    />
    <div className="_youtubeEmbed-info">
        <div className="_youtbeEmbed-title">{title}</div>
        <div className="_youtubeEmbed-creator">- {creator}</div>
    </div>
    </div>

  )
}

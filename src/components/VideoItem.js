import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div className="video-item item" onClick={() => onSelectedVideo(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <p className="header">{video.snippet.title}</p>
      </div>
    </div>
  );
};
export default VideoItem;

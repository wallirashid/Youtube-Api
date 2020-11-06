import React from "react";
const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <h2>Loading</h2>;
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui warpper">
      <div className="ui embed">
        <iframe src={videoUrl} title={video.snippet.title}></iframe>
      </div>
      <div className="ui segment">
        <div className="ui header">
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;

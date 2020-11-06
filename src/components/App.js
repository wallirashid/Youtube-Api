import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount = () => {
    this.onSubmit("Most Dangerous Road Babusar Top");
  };
  onSubmit = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDpuj_mm8Eg4pQoeNJyKssVZCAzBC1uJMo",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: "5",
          videoType: "any",
          order: "title",
          q: term,
        },
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onSelectedVideo = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectedVideo={this.onSelectedVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

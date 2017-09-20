import React, { Component } from "react";
import YT_Search from "youtube-api-search";

const YT_API_KEY = "AIzaSyBqirY60CEOOk5cY_VnfPHELJtZS1nMEw8";

class YTSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video_url: null,
      video_saved_url: null
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('this is the next props: ', nextProps);
    let term;
    let { weather } = nextProps;
    if (weather === null) {
    } else if (weather[0] >= 200 && weather[0] <= 599) {
      term = "la vie en rose louis armstrong";
      YT_Search({ key: YT_API_KEY, term }, videos => {
        this.setState({
          video_url: videos[0].id.videoId,
          video_saved_url: videos[0].id.videoId
        });
      });
    } else if (weather[0] >= 600 && weather[0] <= 699) {
      term = "christmas music";
      YT_Search({ key: YT_API_KEY, term }, videos => {
        this.setState({
          video_url: videos[0].id.videoId,
          video_saved_url: videos[0].id.videoId
        });
      });
    } else if (weather[0] >= 700 && weather[0] <= 799) {
      term = "griz";
      YT_Search({ key: YT_API_KEY, term }, videos => {
        this.setState({
          video_url: videos[0].id.videoId,
          video_saved_url: videos[0].id.videoId
        });
      });
    } else if (weather[0] == 800) {
      term = "griz";
      YT_Search({ key: YT_API_KEY, term }, videos => {
        this.setState({
          video_url: videos[0].id.videoId,
          video_saved_url: videos[0].id.videoId
        });
      });
    } else if (weather[0] >= 800 && weather[0] <= 899) {
      term = "jazz blues";
      YT_Search({ key: YT_API_KEY, term }, videos => {
        this.setState({
          video_url: videos[0].id.videoId,
          video_saved_url: videos[0].id.videoId
        });
      });
    } else if (weather[0] >= 900 && weather[0] <= 999) {
      term = "stairway to heaven";
      YT_Search({ key: YT_API_KEY, term }, videos => {
        this.setState({
          video_url: videos[0].id.videoId,
          video_saved_url: videos[0].id.videoId
        });
      });
    }
  }

  toggleSound() {
    const { video_url, video_saved_url } = this.state;
    if (video_url) {
      this.setState({ video_url: "" });
    } else {
      this.setState({ video_url: video_saved_url });
    }
  }

  render() {
    const style = {
      display: "none"
    };
    return (
      <div className="col-md-1 offset-md-4 yt_video">
        <iframe
          style={style}
          frameBorder="0"
          src={
            "https://www.youtube.com/embed/" +
            this.state.video_url +
            "?autoplay=1"
          }
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => this.toggleSound()}
        >
          Mute
        </button>
      </div>
    );
  }
}

export default YTSearch;

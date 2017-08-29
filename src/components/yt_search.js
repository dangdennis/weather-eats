import React, {Component} from 'react';
import YT_Search from 'youtube-api-search';
const YT_API_KEY = 'AIzaSyBqirY60CEOOk5cY_VnfPHELJtZS1nMEw8';
let term;
class YTSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      yt_term: '',
      video_shown: null
    }
  }
  componentWillReceiveProps(nextProps){
    let {weather} = nextProps;
    if(weather === null){
      console.log('no weather still...');
    }
    else if(weather >= 200 && weather <=599){
      term = 'la vie en rose louis armstrong';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].etag
        })
      })
    }
    else if(weather >= 600 && weather <=699){
      term = 'christmas music';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].etag
        })
      })
    }
    else if(weather >= 700 && weather <=799){
      term = 'electronic music';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].etag
        })
      })
    }
    else if(weather == 800){
      term = 'griz';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].etag
        })
      })
    }
    else if(weather >= 800 && weather <=899){
      term = 'jazz blues';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].etag
        })
      })
    }
    else if(weather >= 900 && weather <=999){
      term = 'stairway to heaven';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].etag
        })
      })
    }
  }
  render(){
    console.log('this is the state of video: ', this.state.video_shown);
    return(
      <iframe src={`https://www.youtube.com/embed/${this.state.video_shown}`}></iframe>
    )
  }
}

export default YTSearch;

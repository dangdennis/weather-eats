import React, {Component} from 'react';
import YT_Search from 'youtube-api-search';
const YT_API_KEY = 'AIzaSyBqirY60CEOOk5cY_VnfPHELJtZS1nMEw8';
let term;
class YTSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      video_shown: null
    }
  }
  componentWillReceiveProps(nextProps){
    let {weather} = nextProps;

    if(weather === null){
      console.log('no weather still...', weather);
    }
    else if(weather >= 200 && weather <=599){
      term = 'la vie en rose louis armstrong';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].id.videoId
        })
      })
    }
    else if(weather >= 600 && weather <=699){
      term = 'christmas music';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].id.videoId
        })
      })
    }
    else if(weather >= 700 && weather <=799){
      term = 'griz';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        console.log('this is videos: ', videos);

        this.setState({
          video_shown: videos[0].id.videoId
        })
      })
    }
    else if(weather == 800){
      term = 'griz';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].id.videoId
        })
      })
    }
    else if(weather >= 800 && weather <=899){
      term = 'jazz blues';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].id.videoId
        })
      })
    }
    else if(weather >= 900 && weather <=999){
      term = 'stairway to heaven';
      YT_Search({key: YT_API_KEY, term},(videos)=>{
        this.setState({
          video_shown: videos[0].id.videoId
        })
      })
    }
  }
  render(){
    let style = {}
    if(this.state.video_shown === null){
      style = {
        display: 'none'
      }
    }
    console.log('this is the state of the video shown: ', this.state.video_shown);
    return(
      <div className='col-md-1 offset-md-4 yt_video'>
        <iframe style={style} frameBorder='0' src={'https://www.youtube.com/embed/'+this.state.video_shown+'?autoplay=1'}></iframe>
      </div>
    )
  }
}

export default YTSearch;

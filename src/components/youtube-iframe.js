import React from "react";
import YouTube from "react-youtube";

class Youtube extends React.Component {
	pauseVideo() {
		console.log("opts", opts);
	}

	_toggleSound(e) {
		console.log("state changing", e);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		console.log("yt event", event);
		event.target.pauseVideo();
	}

	render() {
		const opts = {
			height: "390",
			width: "640",
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};

		return (
			<div>
				<YouTube
					videoId="XRD9JTGEE6U"
					opts={opts}
					onReady={this._onReady}
					onStateChange={this._toggleSound}
				/>
				<button onClick={() => this.pauseVideo(opts)}>mute</button>
			</div>
		);
	}
}

export default Youtube;

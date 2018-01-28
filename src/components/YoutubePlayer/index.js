import React from 'react';
import YouTube from 'react-youtube';

class YoutubePlayer extends React.Component {

  pluckId = (url) => {
    return url ? url.match(/\?v=([^&]+)/)[1] : ''
  }

  render () {
    if (this.player) {
      if (this.props.playing) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
        this.player.seekTo(0)
      }
    }
    return (
      <YouTube
        videoId={this.pluckId(this.props.url)}
        opts={{height: "0", width: "0", playerVars: {autoplay: 1}}}
        onPlay={event => {
          this.player = event.target;
          if (!this.props.playing) event.target.pauseVideo();
        }}/>
    )
  }
}

export default YoutubePlayer;

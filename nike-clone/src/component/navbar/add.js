import React, { Component } from "react";
import video1 from "C:/Users/cc/Desktop/PROJECT NIKE/nike-clone/src/component/navbar/1024339805-preview.mp4";

class Video extends Component {
  render() {
    return (
      <div>
        <video controls src={video1} style={{marginLeft:'10px',width:'1500px',marginTop:'40px'}}/>
      </div>
    );
  }
}

export default Video;
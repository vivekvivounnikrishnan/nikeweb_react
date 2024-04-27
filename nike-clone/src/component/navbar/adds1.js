import React, { Component } from "react";
import video from "C:/Users/cc/Desktop/PROJECT NIKE/nike-clone/src/component/navbar/istockphoto-611847474-640_adpp_is(1).mp4";

class Video1 extends Component {
  render() {
    return (
      <div>
        <video controls src={video} style={{marginLeft:'10px',width:'1500px',height:'1500px'}}/>
      </div>
    );
  }
}

export default Video1;
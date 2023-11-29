"use client";
import React from "react";
import YouTube from "react-youtube";
import swal from "sweetalert";

const VideoPlayer = ({ youTubeId, width, height }) => {
  const handleVideoError = () => {
    swal({
      title: "Oops!",
      text: "Ada masalah saat memuat video. Silakan coba lagi nanti.",
      icon: "error",
      button: {
        text: "OK",
        className: "bg-secondary text-white",
      },
      closeOnClickOutside: false,
      closeOnEsc: false,
    });
  };

  const videoOptions = {
    height: `${height}`,
    width: `${width}`,
  };

  return (
    <YouTube
      videoId={youTubeId}
      onReady={(event) => event.target.pauseVideo()}
      opts={videoOptions}
      onError={handleVideoError}
      className=""
    />
  );
};

export default VideoPlayer;

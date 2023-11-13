"use client";
import { useState } from "react";
import YouTube from "react-youtube";
import swal from "sweetalert";

const VideoPlayer = ({ youTubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoError = () => {
    // Display a SweetAlert notification when an error occurs
    swal({
      title: "Oops!",
      text: "There was an issue loading the video. Please try again later.",
      icon: "error",
      button: {
        text: "OK",
        className: "bg-secondary text-white",
      },
      closeOnClickOutside: false,
      closeOnEsc: false,
    });
  };

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    height: "300",
    width: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2 px-3 mb-1">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary"
        >
          X
        </button>
        <YouTube
          videoId={youTubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={handleVideoError}
        ></YouTube>
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className=" fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player></Player> : <ButtonOpenPlayer></ButtonOpenPlayer>;
};

export default VideoPlayer;

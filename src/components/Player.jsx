import React, { useState, useRef, useEffect } from "react";
import { songsData } from "../assets/assets";
import { assets } from "../assets/assets";

const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const currentSong = songsData[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const next = () => {
    const index = (currentIndex + 1) % songsData.length;
    setCurrentIndex(index);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const prev = () => {
    const index = (currentIndex - 1 + songsData.length) % songsData.length;
    setCurrentIndex(index);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const loopAudio = () => {
    audioRef.current.loop = !audioRef.current.loop;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <>
      <div className="flex items-center gap-4 text-white justify-between mx-2">
        <div className="hidden md:flex gap-4">
          <img className="w-12" src={currentSong.image} alt="Current Song" />
          <div>
            <p className="">{currentSong.name}</p>
            <p className="">{currentSong.desc.slice(0, 12)}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center m-auto">
          <div className="flex gap-4">
            <audio ref={audioRef} src={currentSong.file}></audio>
            <img
              className="cursor-pointer w-4"
              src={assets.shuffle_icon}
              alt="Shuffle"
            />
            <img
              onClick={prev}
              className="cursor-pointer w-4"
              src={assets.prev_icon}
              alt="Previous"
            />
            <img
              onClick={togglePlay}
              className="cursor-pointer w-4"
              src={isPlaying ? assets.pause_icon : assets.play_icon}
              alt="Play/Pause"
            />
            <img
              onClick={next}
              className="cursor-pointer w-4"
              src={assets.next_icon}
              alt="Next"
            />
            <img
              onClick={loopAudio}
              className="cursor-pointer w-4"
              src={assets.loop_icon}
              alt="Loop"
            />
          </div>
          <div className="flex items-center gap-5">
            <p>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}
            </p>
            <input
              type="range"
              min="0"
              max={audioRef.current?.duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            />
            <p>
              {Math.floor(audioRef.current?.duration / 60)}:
              {Math.floor(audioRef.current?.duration % 60)
                .toString()
                .padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <img className="w-4" src={assets.plays_icon} alt="Plays" />
          <img className="w-4" src={assets.mic_icon} alt="Mic" />
          <img className="w-4" src={assets.queue_icon} alt="Queue" />
          <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-gray-300 rounded cursor-pointer"
          />
          <img
            className="w-4"
            src={assets.mini_player_icon}
            alt="Mini Player"
          />
          <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
        </div>
      </div>
    </>
  );
};

export default Player;

"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AudioData } from "../data/AudioTour";

const AudioTour = ({ initialPlayingAudioId }) => {
  const [playingAudioId, setPlayingAudioId] = useState(initialPlayingAudioId);

  useEffect(() => {
    // Handle audio state on component mount (SSR)
    if (initialPlayingAudioId) {
      const audioElement = document.getElementById(
        `audio-${initialPlayingAudioId}`
      );
      audioElement.play(); // Start playing if initialPlayingAudioId is set
    }
  }, [initialPlayingAudioId]);

  const handleAudioPlayPause = (id) => {
    const audioElement = document.getElementById(`audio-${id}`);

    if (playingAudioId === id) {
      audioElement.pause();
      setPlayingAudioId(null);
    } else {
      if (playingAudioId) {
        const previousAudioElement = document.getElementById(
          `audio-${playingAudioId}`
        );
        previousAudioElement.pause();
      }
      audioElement.play();
      setPlayingAudioId(id);
    }
  };

  return (
    <div className="px-5 lg:px-28 mx-auto flex flex-col items-center">
      <h1 className="text-center heading flex justify-center flex-wrap lg:text-4xl text-2xl font-semibold mt-32">
        Try trailer of an audio tour
      </h1>
      <div className="flex container justify-center items-center flex-col md:flex-row mt-10 gap-5 overflow-scroll">
        {AudioData.map((data) => {
          const isPlaying = playingAudioId === data.id;
          return (
            <div
              key={data.id}
              className="flex flex-col p-3 bg-white rounded-xl"
            >
              <Image
                src={data.image}
                alt={data.title}
                width={450}
                height={400}
                className="max-w-1/2 max-h-60 object-cover rounded-md"
              />
              <div>
                <audio id={`audio-${data.id}`} src={data.audio} />
              </div>
              <div className="flex justify-between">
                <h1 className="lg:text-2xl heading font-bold mt-4">
                  {data.title}
                </h1>
                <img
                  src={isPlaying ? "/audio/pause.png" : "/audio/button.png"}
                  className="cursor-pointer h-14 -mt-5"
                  alt={isPlaying ? "Pause" : "Play"}
                  onClick={() => handleAudioPlayPause(data.id)}
                />
              </div>
              <p className="mt-4">{data.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Optionally fetch data for AudioData on the server
  // const audioData = await fetchAudioData();

  return {
    props: {
      initialPlayingAudioId: null, // Or set an initial playing audio ID here
      // audioData, // If fetched data is included
    },
  };
}

export default AudioTour;

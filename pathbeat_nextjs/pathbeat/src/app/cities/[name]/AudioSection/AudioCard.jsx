import React, { useState, useEffect, useRef } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { IoLocationOutline, IoPlay } from 'react-icons/io5';

const AudioCard = ({ place, onPress, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [linesExceeded, setLinesExceeded] = useState(false);
  const descriptionRef = useRef(null);

  const calculateTotalDuration = (monument) => {
    const calculateDuration = (audios) => {
      return audios.reduce((totalMinutes, audio) => {
        const [minutes, seconds] = audio.Duration.split(':').map(Number);
        const durationInMinutes = seconds / 60 + minutes;
        return totalMinutes + durationInMinutes;
      }, 0);
    };

    let totalDuration = 0;

    if (monument.Content?.Audios) {
      totalDuration += calculateDuration(monument.Content.Audios);
    }

    if (monument.Areas) {
      for (const area of monument.Areas) {
        if (area.Content?.Audios) {
          totalDuration += calculateDuration(area.Content.Audios);
        }
      }
    }

    return Math.ceil(totalDuration);
  };

  const calculateStops = (monument) => {
    const noOfAreas = monument?.Areas?.length || 0;
    return 1 + noOfAreas;
  };

  const totalDuration = calculateTotalDuration(place);
  const stops = calculateStops(place);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const element = descriptionRef.current;
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
    const maxHeight = lineHeight * 2;

    if (element.scrollHeight > maxHeight) {
      setLinesExceeded(true);
    }
  }, [place.Description]);

  return (
    <div className="w-[93%] sm:w-[90%] bg-[#fff] sm:m-4 pb-2 mx-3 rounded-lg shadow-md m-auto my-4">
      <div className="relative cursor-pointer h-56 sm:h-72" onClick={onPress}>
        <img
          src={place.Images?.[0] || 'dummyImgUrl'}
          alt={place.Name}
          className="w-full h-full sm:h-72 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <div className="flex items-center bg-white px-2 py-1 rounded-full">
            <FaHeadphonesAlt size={12} className="text-brandColor" />
            <span className="ml-1 text-xs font-light text-brandColor">
              {totalDuration} min
            </span>
          </div>
          <div className="flex items-center bg-white px-2 py-1 rounded-full">
            <IoLocationOutline size={12} className="text-brandColor" />
            <span className="ml-1 text-xs font-light text-brandColor">
              {stops} {stops === 1 ? 'stop' : 'stops'}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-3">
            <IoPlay className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <p className="text-white text-lg font-ibm">{place.Name}</p>
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <p
          ref={descriptionRef}
          className={`text-gray-600 text-sm px-3 py-1 ${!isExpanded && linesExceeded ? 'line-clamp-2' : ''}`}
        >
          {place.Description}
        </p>
        <button
          onClick={onPress}
          className="bg-brandColor text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <AiFillPlayCircle size={20} />
        </button>
      </div>
      {linesExceeded && !isExpanded && (
        <button onClick={toggleExpanded} className="text-brandColor px-3">
          Read More
        </button>
      )}
      {linesExceeded && isExpanded && (
        <button onClick={toggleExpanded} className="text-brandColor px-3">
          Read Less
        </button>
      )}
    </div>
  );
};

export default AudioCard;

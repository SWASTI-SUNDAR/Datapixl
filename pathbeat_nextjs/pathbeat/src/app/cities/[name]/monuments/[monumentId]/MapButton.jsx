import React from 'react';
import { IoMap } from 'react-icons/io5';

const MapButton = ({ distance, latLong, insideCity, insideMonument }) => {
  const roundedDistance = Math.round(distance * 100) / 100;

  const handleOnPress = () => {
    window.open(
      `https://www.google.com/maps?q=${latLong.lat},${latLong.long}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleOnPress}
      className="flex flex-row items-center justify-center rounded-md"
    >
      {insideCity && !insideMonument && (
        <span className="text-white text-lg font-bold mr-2">
          {roundedDistance} km
        </span>
      )}
      {!insideMonument && latLong.lat && latLong.long && (
        <div
          className="flex items-center justify-center bg-white rounded-md p-2"
          style={{
            width: '40px',
            height: '40px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <IoMap size={24} color="#1B3D5F" />
        </div>
      )}
    </button>
  );
};

export default MapButton;

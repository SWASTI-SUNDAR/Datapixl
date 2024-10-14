import React, { useEffect, useState } from 'react';
import UnVisitedPin from './pins/UnvisitedPin';
import CurrentPin from './pins/CurrentPin';
import EntranceCurrentPin from './pins/EntranceCurrentPin';
import EntranceVisitedPin from './pins/EntranceVisitedPin';
import VisitedPin from './pins/VisitedPin';

const BluePrintWithPoint = ({
  bluePrintUrl,
  monumentAreas,
  selectedAreaId,
  handleAreaPress,
  entranceCoordinates,
}) => {
  const [imageLayout, setImageLayout] = useState({ width: 0, height: 0 });
  const [currentSequence, setCurrentSequence] = useState(-1);

  useEffect(() => {
    const selectedArea = monumentAreas.find(
      (area) => area.Uuid === selectedAreaId
    );
    if (selectedArea) {
      setCurrentSequence(selectedArea.Sequence);
    } else {
      setCurrentSequence(-1);
    }
  }, [monumentAreas, selectedAreaId]);

  const handlePointPress = (area) => {
    handleAreaPress(area);
  };

  const points = monumentAreas.map((area) => ({
    x: area.BlueprintXCoordinate,
    y: area.BlueprintYCoordinate,
    area,
    sequence: area.Sequence,
  }));

  const dotSize = 45;

  return (
    <div className="relative w-full md:w-[35%] mx-auto overflow-hidden">
      <div
        className="relative"
        style={{
          width: '100%',
          height: 'auto',
          overflow: 'hidden',
          transform: 'scale(1)',
        }}
      >
        <img
          src={bluePrintUrl}
          alt="Blueprint"
          className="w-full object-contain"
          onLoad={(e) =>
            setImageLayout({
              width: e.target.offsetWidth,
              height: e.target.offsetHeight,
            })
          }
        />
        {points.map((point) => (
          <button
            key={point.area.Uuid}
            onClick={() => handlePointPress(point.area)}
            className="absolute"
            style={{
              left: ((point.x ?? 0) / 100) * imageLayout.width - dotSize / 2,
              top: (1 - (point.y ?? 0) / 100) * imageLayout.height - dotSize,
            }}
          >
            {point.sequence > currentSequence && (
              <UnVisitedPin size={dotSize} sequence={point.sequence} />
            )}
            {point.sequence < currentSequence && (
              <VisitedPin size={dotSize} sequence={point.sequence} />
            )}
            {selectedAreaId === point.area.Uuid && (
              <CurrentPin size={dotSize} sequence={point.sequence} />
            )}
          </button>
        ))}
        <button
          onClick={() => handlePointPress(null)}
          className="absolute"
          style={{
            left:
              ((entranceCoordinates.x ?? 0) / 100) * imageLayout.width -
              dotSize / 2,
            top:
              (1 - (entranceCoordinates.y ?? 0) / 100) * imageLayout.height -
              dotSize / 2,
          }}
        >
          {currentSequence === -1 ? (
            <EntranceCurrentPin size={dotSize} />
          ) : (
            <EntranceVisitedPin size={dotSize} />
          )}
        </button>
      </div>
    </div>
  );
};

export default BluePrintWithPoint;

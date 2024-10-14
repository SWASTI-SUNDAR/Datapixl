import React, { useMemo } from "react";
// import HorizontalWrapper from "../../dynamics/HorizontalWrapper";
// import { useRouter } from "next/router";
import RenderAudioItems from "./RenderAudioItems";
import RendermonumentItems from "./RenderAudioItems";
import HorizontalWrapper from "@/dynamics/HorizontalWrapper";
import { useRouter } from "next/navigation";

const AudioSection = ({ audios, cityName }) => {
  const router = useRouter();

  // Filter monuments that have audios
  const filterMonuments = useMemo(
    () =>
      audios?.filter(
        (monument) =>
          monument.Content.Audios && monument.Content.Audios.length > 0
      ),
    [audios]
  );

  // Calculate the total duration of audio for a monument
  const calculateTotalDuration = (monument) => {
    const calculateDuration = (audios) => {
      return audios?.reduce((totalMinutes, audio) => {
        const [minutes, seconds] = audio.Duration.split(":").map(Number);
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

  // Calculate the number of stops for a monument
  const calculateStops = (monument) => {
    const noOfAreas = monument?.Areas?.length || 0;
    return 1 + noOfAreas;
  };

  // Memoized calculation for monument durations and stops
  const monumentDurationsAndStops = useMemo(
    () =>
      filterMonuments.map((monument) => {
        const totalDuration = calculateTotalDuration(monument);
        const stops = calculateStops(monument);
        return { monument, totalDuration, stops };
      }),
    [filterMonuments]
  );

  // Handle navigation using Next.js router
  const handleNavigate = () => {
    router.push({
      pathname: `/cities/${cityName}/audios-tour`,
      query: { audios: JSON.stringify(audios) },
    });
  };

  return (
    <HorizontalWrapper
      name={cityName + ` Audio Stories`}
      handleNavigate={handleNavigate}
    >
      <div className="scrollView flex overflow-x-auto snap-x snap-mandatory space-x-3">
        {monumentDurationsAndStops.map(({ monument, totalDuration, stops }) => {
          return (
            <div key={monument.Uuid}>
              <RendermonumentItems
                cityName={cityName}
                monument={monument}
                totalDuration={totalDuration}
                stops={stops}
              />
            </div>
          );
        })}
      </div>
    </HorizontalWrapper>
  );
};

export default AudioSection;

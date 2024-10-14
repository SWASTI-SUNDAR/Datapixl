import React from "react";
import HorizontalWrapper from "@/dynamics/HorizontalWrapper";
import RenderItems from "./RenderItems";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const VideoSection = ({ videos, cityName, onVideoSelect }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push({
      pathname: `/cities/${cityName}/videos-tour`,
      query: { videos: JSON.stringify(videos) },
    });
  };

  return (
    <HorizontalWrapper
      name={`${cityName} Video Stories`}
      handleNavigate={handleNavigate}
    >
      <div className="scrollView flex overflow-x-auto snap-x snap-mandatory space-x-0.5 pb-3">
        {videos?.map((videoItem) => (
          <div
            key={videoItem.Uuid}
            className="snap-start w-60"
            onClick={() => onVideoSelect(videoItem.Url)}
          >
            <RenderItems cityName={cityName} video={videoItem} />
          </div>
        ))}
      </div>
    </HorizontalWrapper>
  );
};

export default VideoSection;

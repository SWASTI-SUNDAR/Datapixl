import React from "react";
import HorizontalWrapper from "@/dynamics/HorizontalWrapper";
// import { useRouter } from "next/router";
import WebstoryCard from "./WebstoriesCard";
import { useRouter } from "next/navigation";

const WebStoriesSection = ({ webstories, cityName }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push({
      pathname: `/cities/${cityName}/web-stories`,
      query: { webstories: JSON.stringify(webstories) },
    });
  };

  return (
    <HorizontalWrapper
      name={`${cityName} Web Stories`}
      handleNavigate={handleNavigate}
    >
      <div className="scrollView flex overflow-x-auto snap-x snap-mandatory">
        {webstories?.map((webstory) => (
          <div key={webstory.Uuid}>
            <WebstoryCard webstory={webstory} />
          </div>
        ))}
      </div>
    </HorizontalWrapper>
  );
};

export default WebStoriesSection;

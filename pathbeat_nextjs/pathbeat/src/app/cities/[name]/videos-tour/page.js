"use client";

import React, { useMemo } from "react";
// import { useRouter } from "next/router";
import VideoCard from "../videoSection/VideoCard";
// import Navbar from "../components/Navbar";

import { useParams, useRouter } from "next/navigation";
import { useFetchCityAndPackageData } from "@/utils/packagedatetails";
import LoadingOverlay from "@/components/LoadingOverlay";

const VideosPage = () => {
  const router = useRouter();
  const params = useParams();
  const { name } = params;
  //   const { name } = router.query; // Get the city name from the query params

  // Assuming locationVideos would come from query params or state management
  const locationVideos = router.query.videos || null;

  let newPackageDetails = [];
  let citiesLoading;
  let packagedatetailsFetching;

  if (!locationVideos) {
    const { packageDetails, fetchingCitiesData, fetchingPackageData } =
      useFetchCityAndPackageData();
    newPackageDetails = packageDetails;
    citiesLoading = fetchingCitiesData;
    packagedatetailsFetching = fetchingPackageData;
  }

  const citiesContentVideos = useMemo(() => {
    const videos = [];
    if (!locationVideos && name) {
      newPackageDetails?.Cities?.forEach((city) => {
        if (city.Content?.Videos) {
          videos.push(...city.Content.Videos);
        }
      });
    }
    return videos;
  }, [newPackageDetails, locationVideos, name]);

  const videosToDisplay =
    locationVideos?.length > 0 ? locationVideos : citiesContentVideos;

  if (citiesLoading || packagedatetailsFetching) {
    return <LoadingOverlay />;
  }

  return (
    <div className="w-full bg-[#FAFAFA]">
      <div className="w-[95%] sm:w-[80%] m-auto bg-[#FAFAFA] pt-16 sm:pt-12 lg:pt-10 xl:pt-2">
        <div className="flex flex-col sm:p-5 min-h-screen">
          {videosToDisplay.length === 0 && (
            <p className="text-center text-lg text-gray-500">No videos found</p>
          )}
          {videosToDisplay.length > 0 && (
            <div className="w-full sm:w-[90%] xl:w-[70%] m-auto">
              {videosToDisplay.map((video, index) => (
                <div key={video.Uuid}>
                  <VideoCard cityName={name} video={video} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;

"use client";
import { useEffect, useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import VideoSection from "./videoSection/VideoSection";
import WebStoriesSection from "./webstoriesSection/WebStoriesSection";
import AudioSection from "./AudioSection/AudioSection";
import LoadingOverlay from "@/components/LoadingOverlay";
import Head from "next/head";
import { useFetchCityAndPackageData } from "@/utils/packagedatetails";
import { useAppSelector } from "@/hooks/reduxStoreHooks";

const DetailsPage = () => {
  // const router = useRouter();
  const params = useParams();
  const { name } = params;

  console.log("hhhhhh" + name);
  // console.log(router);
  // const { name } = router.query?.name || ""; // Use optional chaining to safely access name
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [homePageVideoUrl, setHomePageVideoUrl] = useState("");

  let citiesLoading;
  let packageLoading;
  if (name) {
    const { fetchingCitiesData, fetchingPackageData } =
      useFetchCityAndPackageData();
    citiesLoading = fetchingCitiesData;
    packageLoading = fetchingPackageData;
  }

  const { packageDetails } = useAppSelector((state) => state.packagesSlice);

  const audiosWithImages = useMemo(
    () => packageDetails?.Cities?.[0]?.Content?.AudiosWithImages || [],
    [packageDetails]
  );

  const citiesContentVideos = useMemo(() => {
    const videos = [];
    packageDetails?.Cities?.forEach((city) => {
      if (city.Content?.Videos) {
        videos.push(...city.Content.Videos);
      }
    });
    return videos;
  }, [packageDetails]);

  const monumentsData = useMemo(
    () => packageDetails?.Cities?.[0]?.Monuments ?? [],
    [packageDetails]
  );

  const webstories = useMemo(() => {
    const stories = packageDetails?.Cities?.[0]?.Content?.Webstories || [];
    monumentsData.forEach((monument) => {
      if (monument?.Content?.Webstories) {
        stories.push(...monument.Content.Webstories);
      }
    });
    return stories;
  }, [monumentsData, packageDetails]);

  useEffect(() => {
    if (packageDetails && packageDetails.Cities?.length > 0) {
      const newHomePageVideoUrl =
        packageDetails.Cities[0].Content?.Videos?.[0]?.Url;
      setHomePageVideoUrl(newHomePageVideoUrl || "");
    } else {
      setHomePageVideoUrl("");
    }
  }, [packageDetails, name]);

  const handleVideoSelect = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
  };

  if (citiesLoading || packageLoading) {
    return <LoadingOverlay />;
  }

  const city = packageDetails?.Cities?.find((city) => city.Name === name);
  const ogImage =
    city?.Content?.Videos?.[0]?.Url ||
    city?.Monuments?.[0]?.Image ||
    "default-image-url";
  const ogDescription =
    city?.Description || `Explore the rich history and beauty of ${name}.`;

  return (
    <>
      <Head>
        <title>{`${name} - Discover ${name}'s Rich History and Culture`}</title>
        <meta name="description" content={ogDescription} />
        <meta
          name="keywords"
          content={`${name}, history, culture, travel, tourism, audio guides`}
        />
        <meta name="author" content="Pathbeat" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={`Discover ${name}`} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:url"
          content={`https://pathbeat.in/cities/${name}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Discover ${name}`} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@yourtwitterhandle" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://pathbeat.in/cities/${name}`} />
      </Head>

      <div className="w-full bg-[#FAFAFA]">
        <div className="w-full sm:w-[90%] pt-24 md:pt-24 lg:pt-10 xl:pt-4 m-auto px-4 sm:px-10">
          {homePageVideoUrl && (
            <div className="video-player w-full sm:w-[90%] md:w-[90%] lg:w-[70%] m-auto">
              <video key={homePageVideoUrl} controls preload="metadata">
                <source src={homePageVideoUrl} type="video/mp4" />
              </video>
            </div>
          )}

          <section>
            {citiesContentVideos.length > 0 && (
              <VideoSection
                cityName={name}
                videos={citiesContentVideos}
                onVideoSelect={handleVideoSelect}
              />
            )}
          </section>

          <section>
            {monumentsData.length > 0 && (
              <AudioSection cityName={name} audios={monumentsData} />
            )}
          </section>

          <section>
            {webstories.length > 0 && (
              <WebStoriesSection cityName={name} webstories={webstories} />
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;

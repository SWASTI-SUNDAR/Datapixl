"use client"
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
// import { useRouter } from "next/router"; // Next.js router
import { IoArrowBack, IoSunnyOutline } from "react-icons/io5";
import { MdReplay10, MdForward10, MdPlayArrow, MdPause } from "react-icons/md";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { debounce } from "lodash";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useFetchCityAndPackageData } from "@/utils/packagedatetails";
import { useParams, useRouter } from "next/navigation";

const VideoPlayer = () => {
  const router = useRouter();
  const params = useParams();

  const { name, videoId } = params // Replaces useParams()

  const videoPlayer = useRef(null);
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [resizeMode, setResizeMode] = useState("contain");
  const [brightness, setBrightness] = useState(0.5);
  const [loading, setLoading] = useState(true);
  const [buffering, setBuffering] = useState(false);
  const controlsTimeoutRef = useRef(null);

  let newPackageDetails = [];
  let citiesLoading;
  let packagedatetailsFetching;

  const { video } = router.query || {}; // Router state replacement

  if (!video && name) {
    const { packageDetails, fetchingCitiesData, fetchingPackageData } =
      useFetchCityAndPackageData();
    citiesLoading = fetchingCitiesData;
    packagedatetailsFetching = fetchingPackageData;
    newPackageDetails = packageDetails;
  }

  const citiesContentVideos = useMemo(() => {
    const videos = [];
    if (!video && name) {
      newPackageDetails?.Cities?.forEach((city) => {
        if (city.Content?.Videos) {
          videos.push(...city.Content.Videos);
        }
      });
    }
    return videos;
  }, [newPackageDetails, video]);

  const filteredVideo = citiesContentVideos?.filter(
    (video) => video.Uuid == videoId
  );

  const videoUrl = video?.Url || filteredVideo[0]?.Url;
  const videoName = video?.Name || filteredVideo[0]?.Name;

  const clearControlsTimeout = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const setControlsTimeout = () => {
    clearControlsTimeout();
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 5000);
  };

  const debouncedTrackProgress = useCallback(
    debounce((ct, d) => {
      if (d > 0) {
        const playedPercentage = (ct / d) * 100;
        // Track video progress analytics (removed external service code)
      }
    }, 10000),
    []
  );

  useEffect(() => {
    debouncedTrackProgress(currentTime, duration);
  }, [currentTime, duration, debouncedTrackProgress]);

  const handleLoad = () => {
    setDuration(videoPlayer.current.duration);
    setLoading(false);
    setControlsTimeout();
    enterFullScreen();
  };

  const handleProgress = () => {
    setCurrentTime(videoPlayer.current.currentTime);
  };

  const handleEnd = () => {
    setPaused(true);
    videoPlayer.current.currentTime = 0;
  };

  const handlePlayPause = () => {
    setPaused((prev) => !prev);
    if (!paused) videoPlayer.current.play();
    else videoPlayer.current.pause();
  };

  const handleForward = () => {
    let newTime = currentTime + 10;
    if (newTime > duration) newTime = duration;
    videoPlayer.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleBackward = () => {
    let newTime = currentTime - 10;
    if (newTime < 0) newTime = 0;
    videoPlayer.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleBack = () => {
    router.back(); // Use router.back() for navigation
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m > 9 ? m : h ? `0${m}` : m || "0", s > 9 ? s : `0${s}`]
      .filter(Boolean)
      .join(":");
  };

  const handleToggleControls = () => {
    setShowControls(!showControls);
    if (!showControls) {
      setControlsTimeout();
    } else {
      clearControlsTimeout();
    }
  };

  const enterFullScreen = () => {
    if (videoPlayer.current.requestFullscreen) {
      videoPlayer.current.requestFullscreen();
    } else if (videoPlayer.current.webkitRequestFullscreen) {
      videoPlayer.current.webkitRequestFullscreen();
    } else if (videoPlayer.current.msRequestFullscreen) {
      videoPlayer.current.msRequestFullscreen();
    }
  };

  if (citiesLoading || packagedatetailsFetching) {
    return <LoadingOverlay />;
  }

  return (
    <div className="relative w-full h-screen bg-black">
      <video
        ref={videoPlayer}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedMetadata={handleLoad}
        onTimeUpdate={handleProgress}
        onEnded={handleEnd}
        style={{ objectFit: resizeMode }}
        controls={false}
        autoPlay={!paused}
      />

      <div
        className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between ${
          showControls ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 p-2 md:p-4`}
        onClick={handleToggleControls}
      >
        <div className="flex justify-between items-center mb-2 md:mb-4">
          <button onClick={handleBack} className="text-white p-2 md:p-4">
            <IoArrowBack size={20} className="md:w-6 md:h-6" />
          </button>
          <span className="text-white text-sm md:text-lg truncate">
            {videoName}
          </span>
          <button
            onClick={() =>
              setResizeMode(resizeMode === "contain" ? "cover" : "contain")
            }
            className="text-white p-2 md:p-4"
          >
            <HiOutlineArrowsExpand size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex justify-center items-center space-x-4 md:space-x-6">
          <button onClick={handleBackward} className="text-white p-2 md:p-4">
            <MdReplay10 size={24} className="md:w-8 md:h-8" />
          </button>
          <button onClick={handlePlayPause} className="text-white p-2 md:p-4">
            {paused ? (
              <MdPlayArrow size={32} className="md:w-10 md:h-10" />
            ) : (
              <MdPause size={32} className="md:w-10 md:h-10" />
            )}
          </button>
          <button onClick={handleForward} className="text-white p-2 md:p-4">
            <MdForward10 size={24} className="md:w-8 md:h-8" />
          </button>
        </div>

        <div className="flex justify-between items-center px-4 mt-2 md:mt-4">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => (videoPlayer.current.currentTime = e.target.value)}
            className="w-full h-2 md:h-4"
          />
          <span className="text-white text-xs md:text-sm ml-2">
            {formatTime(currentTime)}
          </span>
          <span className="text-white text-xs md:text-sm">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

import React, { useState, useRef, useEffect } from "react";
import { IoPlay } from "react-icons/io5";
import { useRouter } from "next/router"; // Replacing useNavigate
import { useDispatch } from "react-redux";
import { setSignInModalInfo } from "@/redux-store/slices/generalSlice";
import { useAppSelector } from "@/hooks/reduxStoreHooks";

const VideoCard = ({ cityName, video, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [linesExceeded, setLinesExceeded] = useState(false);
  const contentRef = useRef(null);

  const router = useRouter(); // Replacing navigate
  const dispatch = useDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.userSlice);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleVideoPress = (video) => {
    if (!isAuthenticated && video.AccessTier === 2) {
      dispatch(
        setSignInModalInfo({
          isModalVisible: true,
          singInModalText: "Sign in to access this video",
        })
      );
      return;
    }

    router.push(`/cities/${cityName}/videos/${video.Uuid}`); // Using router.push for navigation
  };

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 2;

      if (element.scrollHeight > maxHeight) {
        setLinesExceeded(true);
      }
    }
  }, [video.Description]);

  return (
    <div
      key={video.Uuid}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#fff] pb-2 my-4 rounded-lg shadow-md min-h-80 sm:min-h-96 group relative transition-all duration-300"
      style={{ minHeight: "20rem" }}
    >
      <div className="relative">
        <div
          className="cursor-pointer overflow-hidden rounded-t-lg relative h-[70%]"
          onClick={() => handleVideoPress(video)}
        >
          <img
            src={video.ThumbnailImageUrl}
            alt={video.Name}
            className="w-full h-64 object-cover"
          />

          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded">
            <span className="text-white text-sm">{video.Duration}</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`bg-black bg-opacity-50 rounded-full p-3 border-2 border-white ${
                isHovered ? "blink" : ""
              }`}
            >
              <IoPlay className="text-white w-6 h-6 hover:blink" />
            </div>
          </div>
        </div>

        <div className="mt-2 px-3">
          <p className="text-black font-ibm px-1">{`${index + 1}. ${
            video.Name
          }`}</p>

          <div className="mt-2">
            <p
              ref={contentRef}
              className={`text-gray-600 text-sm px-1 py-1 ${
                !isExpanded && linesExceeded ? "line-clamp-2" : ""
              }`}
            >
              {video.Description}
            </p>

            {linesExceeded && !isExpanded && (
              <button onClick={toggleExpanded} className="text-brandColor px-1">
                Read More
              </button>
            )}
            {linesExceeded && isExpanded && (
              <button onClick={toggleExpanded} className="text-brandColor px-1">
                Read Less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

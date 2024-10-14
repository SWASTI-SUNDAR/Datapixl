"use client"
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import "./RenderItemAnimation.css";
// import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/reduxStoreHooks";
import { setSignInModalInfo } from "@/redux-store/slices/generalSlice";
import { useRouter } from "next/navigation";

const RenderItems = ({ cityName, video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.userSlice);

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
    const pathname = `/cities/${cityName}/videos/${video.Uuid}`;
    router.push(
      pathname,
      {
        query: { video: JSON.stringify(video) },
      }
    );
  };
  console.log(`/cities/${cityName}/videos/${video.Uuid}`, {
    videoId: video.Uuid,
  });


  return (
    <div
      key={video.Uuid}
      onClick={() => handleVideoPress(video)}
      className="mx-1 my-2 cursor-pointer h-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 w-[14rem] bg-[#fff] overflow-hidden rounded-lg shadow-custom-opacity drop-shadow-lg my-2 boxShadowc">
        <div className="relative h-[130px]">
          <img
            src={
              video.ThumbnailImageUrl ? video.ThumbnailImageUrl : dummyImgUrl
            }
            alt={video.Name}
            className="w-full h-[120px] object-cover"
          />
          <div className="absolute bottom-3 right-1.5 bg-black bg-opacity-95 text-[#fff] font-normal text-xs px-1.5 py-1 rounded">
            {video.Duration}
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={`w-10 h-10 border-2 justify-center items-center border-[#fff] bg-black bg-opacity-95 rounded-full p-3 ${
                isHovered ? "blink" : ""
              }`}
            >
              <FaPlay size={16} color="#fff" />
            </div>
          </div>
        </div>

        <div className="px-2 gap-0.5">
          <p
            className="font-medium text-sm text-[#1a1a1a] font-ibm tracking-wide-custom line-clamp-1"
            title={video.Name}
          >
            {video.Name}
          </p>
          <p className="text-[#A5A5A5] text-xs line-clamp-2 font-ibm tracking-wide-custom">
            {video.Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenderItems;

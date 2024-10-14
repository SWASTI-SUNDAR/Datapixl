import { useRouter } from "next/navigation";
import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdFiberManualRecord } from "react-icons/md";
// import { useRouter } from "next/router";

const RendermonumentItems = ({ cityName, monument, totalDuration, stops }) => {
  const router = useRouter();

  // Function to handle monument press and navigate to the monument's page
  const handleMonumentPress = (monument) => {
    const pathname = `/cities/${cityName}/monuments/${monument.Uuid}`;
    router.push(
      pathname,
      {query: { monument: JSON.stringify(monument) },
    });
  };

  return (
    <div
      className="bg-[#fff] rounded-lg shadow-custom-opacity drop-shadow-lg my-2 boxShadow"
      onClick={() => handleMonumentPress(monument)}
    >
      <div className="w-[14rem] h-48 overflow-hidden rounded-lg">
        <img
          src={monument?.Images ? monument?.Images[0] : dummyImgUrl}
          alt={monument?.Name}
          className="w-full h-[130px] object-cover hover:scale-105 duration-1000 transform ease-in-out"
        />
        <div className="px-2.5 py-2 flex flex-col items-center gap-1">
          <p className="text-center text-sm font-medium tracking-wide-custom text-[#0F0F0F] line-clamp-1 font-ibm">
            {monument?.Name}
          </p>
          <div className="flex flex-row items-center gap-1 flex-wrap">
            <div className="flex items-center gap-1">
              <FaHeadphonesAlt className="text-[#A5A5A5] text-xs" />
              <p className="text-xs text-gray-500">{totalDuration} min</p>
            </div>
            <MdFiberManualRecord className="text-[#A5A5A5] text-xs" />
            <div className="flex items-center gap-1">
              <IoLocationOutline className="text-[#A5A5A5] text-xs" />
              <p className="text-xs text-gray-500">
                {stops} {stops === 1 ? "stop" : "stops"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendermonumentItems;

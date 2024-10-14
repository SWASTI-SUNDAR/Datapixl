import React from 'react';

const WebstoryCard = ({ webstory }) => {
  const handlewebstoryClicked = (webstory) => {
    if (webstory?.Url) {
      window.open(webstory?.Url, '_blank');
    }
  };
  return (
    <div
      key={webstory.Uuid}
      className="bg-white rounded-lg shadow-custom-opacity drop-shadow-lg w-[240px] h-[230px] my-2 mx-1 overflow-hidden boxShadow"
      onClick={() => handlewebstoryClicked(webstory)}
    >
      <div className="">
        <img
          src={
            webstory?.ThumbnailImageUrl
              ? webstory.ThumbnailImageUrl
              : dummyImgUrl
          }
          loading='lazy'
          alt={webstory.Name}
          className="w-full h-[170px] rounded-t-lg  hover:scale-105 duration-1000 transform ease-in-out  object-cover object-center"
        />
        <div className="px-2 py-2 flex flex-col items-center gap-2">
          <p className="text-center text-sm  font-medium tracking-wide-custom text-[#0F0F0F] line-clamp-2 font-ibm">
            {webstory.Name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebstoryCard;

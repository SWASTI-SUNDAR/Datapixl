import React from 'react';
const WebstoriesRenderCard = ({ webstory }) => {
  const handlewebstoryClicked = (webstory) => {
    if (webstory?.Url) {
      window.open(webstory?.Url, '_blank');
    }
  };
  return (
    <div
      key={webstory.Uuid}
      onClick={() => handlewebstoryClicked(webstory)}
      className="w-36 h-56 bg-white rounded-lg shadow-md mr-2 mb-3 cursor-pointer"
      // onClick={() => handleWebStoryClicked(webstory)}
    >
      <img
        className="w-full h-40 rounded-t-lg"
        src={
          webstory.ThumbnailImageUrl ? webstory.ThumbnailImageUrl : dummyImgUrl
        }
        alt={webstory.Name}
      />
      <div className="px-2">
        <h4 className="text-center font-medium text-sm text-gray-900 truncate">
          {webstory.Name}
        </h4>
      </div>
    </div>
  );
};
export default WebstoriesRenderCard;

import React from 'react';

const AreaNameCards = ({
  handleAreaNamePress,
  name,
  isSelected,
  sequenceNo,
}) => {
  return (
    <button
      className={`flex items-center justify-center p-1 border rounded-md mr-1 ${
        isSelected
          ? 'bg-[#E9F2FF] border-[#E9F2FF]'
          : 'bg-white border-gray-200'
      }`}
      onClick={handleAreaNamePress}
      style={{ height: '35px', borderWidth: '1px' }}
    >
      <div className="flex items-center">
        <div
          className={`flex justify-center items-center rounded-full mr-1 ${
            isSelected
              ? 'bg-[#E9F2FF] text-[#12273F]'
              : 'bg-gray-400 text-white'
          }`}
          style={{ width: '18px', height: '18px', borderWidth: '1px' }}
        >
          <span className="text-[9px] font-small">{sequenceNo}</span>
        </div>
        <span
          className={`text-[10px] font-small ${
            isSelected ? 'text-[#12273F]' : 'text-gray-700'
          }`}
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </span>
      </div>
    </button>
  );
};

export default AreaNameCards;

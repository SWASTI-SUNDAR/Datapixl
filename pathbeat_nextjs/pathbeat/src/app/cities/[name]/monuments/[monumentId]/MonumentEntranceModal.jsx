import React from 'react';
import { FiHeadphones } from 'react-icons/fi';

const MonumentEntranceModal = ({ visible, onCloseModal }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 w-4/5 md:w-1/3 shadow-lg flex flex-col items-center">
        <FiHeadphones size={60} className="text-gray-800 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Audio Guide</h2>
        <p className="text-center text-gray-600 mb-6">
          The audio guide will start now. Please put on your headphones.
        </p>
        <button
          onClick={onCloseModal}
          className="bg-blue-600 text-white rounded-full py-2 px-6 font-bold hover:bg-blue-700 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MonumentEntranceModal;

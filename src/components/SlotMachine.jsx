import React, { useState } from 'react';
import SlotReel from './SlotReel';
import { getRandomRewards } from '../utlis/rewards';

const SlotMachine = () => {
  const [reward, setReward] = useState(null);

  const handleSpin = () => {
    const spinResult = getRandomRewards();
    setReward(spinResult);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-black">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl text-white text-center w-full max-w-md">
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Slot Machine
        </h1>
        <div className="flex justify-center mb-8">
          <SlotReel />
        </div>
        <button
          onClick={handleSpin}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 text-lg font-semibold rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Spin
        </button>
        {reward && (
          <div className="mt-8 bg-gray-800 p-4 rounded-md shadow-md">
            <p className="text-lg">
              <span className="font-bold text-blue-300">Item:</span> {reward.item}
            </p>
            <p className="text-lg">
              <span className="font-bold text-purple-300">Rarity:</span> {reward.rarity}
            </p>
            <p className="text-lg">
              <span className="font-bold text-green-300">Count:</span> {reward.count}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotMachine;

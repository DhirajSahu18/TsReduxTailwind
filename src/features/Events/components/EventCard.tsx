import React from 'react';
import { getCategoryBackgroundColor } from '../../../app/common';

interface EventCardProps {
  imageUrl: string;
  title: string;
  address: string;
  timing: string;
  category: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, title, address, timing, category }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto w-96 md:w-[22rem] my-2">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt="Event" />
      <div className="px-6 py-1">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-300 text-base">{address} | {timing}</p>
      </div>
      <div className="px-6 pb-4">
        <span className={`inline-block ${getCategoryBackgroundColor(category)} rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2`}>{category}</span>
        <button className="bg-purple-600 dark:bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;

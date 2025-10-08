import React from 'react';
import { TbDownload } from 'react-icons/tb';

const AppCard = ({ app }) => {
  console.log(app);
  const { title, image, downloads, ratings } = app;
  return (
    <>
      <div className=" shadow-xl rounded-[8px] p-4 cursor-pointer bg-white space-y-3">
        <img className="w-full rounded-xl" src={image} alt="" />
        <h2 className="text-xl">{title}</h2>
        <div>
          <button className="flex gap-1 items-center border-1 border-gray-200 rounded text-green-400 px-2 py-1">
            <TbDownload />
            {downloads}
          </button>
          {ratings.map((rating) => rating.name[2])}
        </div>
      </div>
    </>
  );
};

export default AppCard;

/**
 * {
    "image": "https://i.ibb.co/fYM6vRr/googlemaps.png",
    "title": "Google Maps",
    "companyName": "Google LLC",
    "id": 13,
    "description": "Find local businesses, view maps, and get driving directions.",
    "size": 55,
    "reviews": 4900000,
    "ratingAvg": 4.7,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 60000 },
      { "name": "2 star", "count": 40000 },
      { "name": "3 star", "count": 150000 },
      { "name": "4 star", "count": 600000 },
      { "name": "5 star", "count": 4050000 }
    ]
  }
 */

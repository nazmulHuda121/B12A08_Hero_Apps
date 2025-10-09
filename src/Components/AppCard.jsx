import React from 'react';
import { TbDownload } from 'react-icons/tb';
import rating from '../assets/icon-ratings.png';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app;
  // console.log(downloads);
  // const [count, setCount] = useState(0);

  return (
    <>
      <Link to={`/app/${id}`}>
        <div className=" shadow-xl rounded-[8px] p-4 cursor-pointer bg-white space-y-3 hover:scale-102 transition ease-in-out">
          <img className="w-36  rounded-xl" src={image} alt="" />
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex items-center justify-between">
            <button className="flex gap-1 items-center border-1 border-gray-200 rounded text-green-400 px-2 py-1">
              <TbDownload />${downloads}M
            </button>
            <button className="flex items-center gap-2 bg-amber-100 text-amber-500 px-1.5 rounded">
              <img className="w-4" src={rating} alt="rating" />
              {ratingAvg}
            </button>
          </div>
        </div>
      </Link>
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

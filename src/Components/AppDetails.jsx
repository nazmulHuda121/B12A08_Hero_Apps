import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { SlLike } from 'react-icons/sl';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const singleApp = apps.find((a) => String(a.id) === id);

  if (loading) return <p>Loading....</p>;
  const { image, downloads, title, companyName, reviews, ratingAvg } =
    singleApp;

  return (
    <>
      <div className="lg:flex py-22 max-w-7xl mx-auto items-start gap-14 px-7 space-y-9">
        <figure className="bg-white p-12">
          <img className="lg:w-70" src={image} alt="Single App" />
        </figure>
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-1">{title}</h2>
          <p className="text-gray-500 font-regular">
            Developed by <span className="linear_color">{companyName}</span>
          </p>
          <hr className="my-5 text-gray-300" />
          <div className="flex items-center gap-20">
            <div className="space-y-2">
              <TbDownload className="text-green-600 text-4xl" />
              <p className="text-gray-600">Downloads</p>
              <span className="text-4xl font-bold">{downloads}M</span>
            </div>
            <div className="space-y-2">
              <FaStar className="text-[#FF8811] text-4xl" />
              <p className="text-gray-600">Average Ratings</p>
              <span className="text-4xl font-bold">{ratingAvg}</span>
            </div>
            <div className="space-y-2">
              <SlLike className="text-purple-600 text-4xl" />
              <p className="text-gray-600">Total Reviews</p>
              <span className="text-4xl font-bold">{reviews}K</span>
            </div>
          </div>
          <button className="bg-[#00D390] text-white py-2.5 px-8 mt-7 rounded cursor-pointer">
            Install Now (291 MB)
          </button>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
/**
 * {
    "image": "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    "title": "Instagram",
    "companyName": "Meta Platforms, Inc.",
    "id": 2,
    "description": "Share your moments, follow friends, and discover global trends.",
    "size": 58,
    "reviews": 54,
    "ratingAvg": 4.5,
    "downloads": 9.8,
    "ratings": [
      { "name": "1 star", "count": 120000 },
      { "name": "2 star", "count": 80000 },
      { "name": "3 star", "count": 400000 },
      { "name": "4 star", "count": 1100000 },
      { "name": "5 star", "count": 3700000 }
    ]
  },
 */

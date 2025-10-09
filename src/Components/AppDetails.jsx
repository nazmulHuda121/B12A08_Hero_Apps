import { NavLink, useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { SlLike } from 'react-icons/sl';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const singleApp = apps.find((a) => String(a.id) === id);

  if (loading) return <p>Loading...</p>;
  const { image, downloads, title, companyName, reviews, ratingAvg, size } =
    singleApp;

  return (
    <>
      <div className="lg:flex py-22 max-w-7xl mx-auto items-start gap-14 px-7 space-y-9">
        <figure className="bg-white p-12 w-2/3 lg:w-2/7">
          <img src={image} alt="Single App" />
        </figure>
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-1">{title}</h2>
          <p className="text-gray-500 font-regular">
            Developed by <span className="linear_color">{companyName}</span>
          </p>
          <hr className="my-5 text-gray-300" />
          <div className="flex items-center gap-20 mb-7">
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
          <NavLink
            to={`/installation/${id}`}
            className="bg-[#00D390] text-white py-2.5 px-8 rounded cursor-pointer"
          >
            Install Now ({size}MB)
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AppDetails;

import { Link, useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { TbDownload } from 'react-icons/tb';
import img from '../assets/App-Error.png';
import { FaStar } from 'react-icons/fa';
import { SlLike } from 'react-icons/sl';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from './Spinner';
import 'react-loading-skeleton/dist/skeleton.css';
import { BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Bar, Legend } from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const singleApp = apps.find((a) => String(a.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

  if (loading) return <Spinner />;

  const {
    image,
    downloads,
    title,
    companyName,
    reviews,
    ratingAvg,
    size,
    ratings,
    description,
  } = singleApp || {};

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem('install') || '[]');
    const isDuplicate = existingList.some((a) => a.id === singleApp.id);

    if (isDuplicate) return toast('Already Exist');

    const updatedList = [...existingList, singleApp];
    localStorage.setItem('install', JSON.stringify(updatedList));
    toast('Installation Done');
    setIsInstalled(true);
  };

  const app = apps.find((a) => a.id.toString() === id);

  if (!app) {
    return (
      <div className="flex flex-col items-center gap-4 mt-20">
        <img className="w-90" src={img} alt="Not Found" />
        <h1 className="text-5xl text-gray-400 font-bold">App Not Found!</h1>
        <p className="mt-4 text-gray-500">
          The app you are looking for does not exist.
        </p>
        <Link
          to={'/'}
          className=" btn bg-[linear-gradient(90deg,#632EE3,#9F62F2)] cursor-pointer text-white mt-4"
        >
          Go Back!
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="lg:flex pb-2 pt-22 max-w-7xl mx-auto items-start gap-14 px-7 space-y-9">
        <figure className="bg-white p-12 w-2/3 lg:w-2/7">
          <img src={image} alt="Single App" />
        </figure>
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-1">{title}</h2>
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
          <button
            onClick={handleAddToInstallation}
            disabled={isInstalled}
            className={`py-2.5 px-8 rounded cursor-pointer ${
              isInstalled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#00D390] text-white'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now ${size}MB`}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-7">
        <hr className="my-5 text-gray-300" />
        <h2 className="text-2xl font-semibold">Ratings</h2>
        <hr className="my-5 text-gray-300" />
        <div className=" h-130 w-full">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              layout="vertical"
              data={[...ratings].reverse()}
              margin={{ top: 50, right: 10, left: 0, bottom: 0 }}
              barCategoryGap="15%"
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <hr className="my-5 text-gray-300" />
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="text-gray-500 font-regular">{description}</p>
        </div>
      </div>
    </>
  );
};

export default AppDetails;

import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Installation = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  if (loading) return toast('Loading....');
  const installApp = apps.find((i) => String(i.id) === id);
  const { title, image, downloads, size, ratingAvg } = installApp;
  return (
    <>
      <div className="max-w-7xl mx-auto my-12 px-4">
        <h2 className="text-4xl text-center font-semibold">
          Your Installed Apps
        </h2>
        <p className="text-gray-500 text-center mt-4 mb-9">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between">
          <span>() Apps Found</span>
          <select name="short by" id="">
            <option value="">Sort By Size</option>
            <option value="">Sort By Name</option>
            <option value="">Sort By Value</option>
          </select>
        </div>
        <div className="bg-white p-5 rounded-xl mt-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img className="w-20" src={image} alt="" />
            <div className="space-y-2">
              <h3 className="font-semibold text-[18px]">App Name: {title}</h3>
              <div className="flex items-center gap-7">
                <div className="text-green-400 flex items-center gap-1.5">
                  <TbDownload className="text-[16px] font-semibold" />
                  <span className="">{downloads}M</span>
                </div>
                <div className="text-[#FF8811] flex items-center gap-1.5">
                  <FaStar className="text-[16px]" />
                  <span>{ratingAvg}</span>
                </div>
                <div className="text-gray-400 flex items-center gap-1.5">
                  <span>{size}MB</span>
                </div>
              </div>
            </div>
          </div>
          <button className="px-5 py-2 text-white bg-green-500 rounded cursor-pointer">
            Uninstall
          </button>
        </div>
      </div>
    </>
  );
};

export default Installation;

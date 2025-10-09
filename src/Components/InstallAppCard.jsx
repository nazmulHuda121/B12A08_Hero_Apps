import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbDownload } from 'react-icons/tb';

const InstallAppCard = ({ install }) => {
  const { title, image, reviews, ratingAvg, downloads } = install;
  return (
    <>
      <div className="bg-white p-5 rounded-xl mt-4 flex justify-between items-center">
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
                <span>{reviews}MB</span>
              </div>
            </div>
          </div>
        </div>
        <button className="px-5 py-2 text-white bg-green-500 rounded cursor-pointer">
          Uninstall
        </button>
      </div>
    </>
  );
};

export default InstallAppCard;

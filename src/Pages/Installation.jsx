import React, { useEffect, useState } from 'react';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import InstallAppCard from '../Components/InstallAppCard';

const Installation = () => {
  const [installApp, setInstallApp] = useState([]);
  useEffect(() => {
    const addedAppList = JSON.parse(localStorage.getItem('install'));
    if (addedAppList) setInstallApp(addedAppList);
  }, []);
  return (
    <>
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-4xl text-center font-semibold">
          Your Installed Apps
        </h2>
        <p className="text-gray-500 text-center mt-4 mb-9">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between mb-12">
          <span>({installApp.length}) Apps Found</span>
          <select name="short by" id="">
            <option value="">Sort By Size</option>
            <option value="">Sort By Name</option>
            <option value="">Sort By Value</option>
          </select>
        </div>
        {installApp.map((install) => (
          <InstallAppCard install={install} key={install.id} />
        ))}
      </div>
    </>
  );
};

export default Installation;

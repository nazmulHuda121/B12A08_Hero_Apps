import React, { useEffect, useState } from 'react';

import InstallAppCard from '../Components/InstallAppCard';
import { toast } from 'react-toastify';

const Installation = () => {
  const [installApp, setInstallApp] = useState([]);
  const [sortOrder, setSortOrder] = useState('None');

  useEffect(() => {
    const addedAppList = JSON.parse(localStorage.getItem('install'));
    if (addedAppList) {
      setInstallApp(addedAppList);
    }
  }, []);

  const sortBySize = (() => {
    if (sortOrder === 'size-asc') {
      return [...installApp].sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'size-desc') {
      return [...installApp].sort((a, b) => b.size - a.size);
    } else {
      return installApp;
    }
  })();

  const handleRemove = (id, title) => {
    const installList = JSON.parse(localStorage.getItem('install') || '[]');
    const updatedList = installList.filter((app) => app.id !== id);

    localStorage.setItem('install', JSON.stringify(updatedList));
    setInstallApp(updatedList);
    toast(`${title}---> Uninstall Complete!`);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-4xl text-center font-semibold">
          Your Installed Apps
        </h2>
        <p className="text-gray-500 text-center mt-4 mb-9">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between mt-22 mb-8">
          <span>({installApp.length}) Apps Found</span>
          <label className="form-control w-full max-w-[150px]">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="None">Sort By Size</option>
              <option value="size-asc">Low-&gt;High</option>
              <option value="size-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
        {sortBySize.map((install) => (
          <InstallAppCard
            install={install}
            key={install.id}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </>
  );
};

export default Installation;

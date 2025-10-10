import React, { useState, useEffect } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../Components/AppCard';
import Spinner from '../Components/Spinner';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const term = search.trim().toLowerCase();

  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  useEffect(() => {
    if (!term) return;

    setSearchLoading(true);
    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [term]);

  return (
    <>
      <h2 className="text-4xl font-semibold mt-12 text-center">
        Our All Applications
      </h2>
      <p className="text-gray-500 mt-4 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between py-5 items-center max-w-5xl mx-auto mt-12 px-4 lg:px-0">
        <h1 className="text-2xl">({searchApps.length}) Apps Found</h1>
        <div>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto items-center justify-center my-8 px-4 lg:px-0">
        {loading || searchLoading ? (
          <Spinner />
        ) : searchApps.length === 0 ? (
          <p className="col-span-full text-center text-7xl text-gray-400 font-medium">
            No apps found!
          </p>
        ) : (
          searchApps.map((app) => <AppCard app={app} key={app.id} />)
        )}
      </div>
    </>
  );
};

export default Apps;

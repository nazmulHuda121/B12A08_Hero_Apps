import React from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../Components/AppCard';

const Apps = () => {
  const { apps } = useApps();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-7xl mx-auto items-center justify-center my-12">
        {apps.map((app) => (
          <AppCard app={app} key={app.id} />
        ))}
      </div>
    </>
  );
};

export default Apps;

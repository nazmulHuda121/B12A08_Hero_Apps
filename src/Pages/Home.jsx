import React from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../Components/AppCard';
import Hero from '../Components/Hero';
import { Link } from 'react-router';

const Home = () => {
  const { apps } = useApps();
  const trendingApps = apps.slice(0, 8);
  return (
    <>
      <Hero />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto items-center justify-center  px-4 lg:px-0">
        {trendingApps.map((app) => (
          <AppCard app={app} key={app.id} />
        ))}
      </div>
      <div className="flex justify-center my-12">
        <Link
          to={'/apps'}
          className="btn bg-[linear-gradient(90deg,#632EE3,#9F62F2)] text-white px-8 py-5"
        >
          Show All
        </Link>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import { FaAppStore, FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import img2 from '../assets/hero.png';

const Hero = () => {
  return (
    <>
      <div className="text-center py-20">
        <h1 className="lg:text-7xl text-5xl font-semibold lg:leading-20">
          We Build <br />{' '}
          <span className="linear_color font-bold">Productive</span> Apps
        </h1>
        <p className="text-gray-500 lg:w-3/5 mx-auto mt-4 p-4">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-6 items-center justify-center mt-12">
          <button className="border-1 border-gray-400 px-5 py-2 rounded flex items-center gap-2 bg-gray-200 cursor-pointer">
            <FaGooglePlay />
            Google Play
          </button>
          <button className="border-1 border-gray-400 px-5 py-2 rounded flex items-center gap-2 bg-gray-200 cursor-pointer">
            <FaAppStore />
            App Store
          </button>
        </div>
        <img className="mx-auto mt-9" src={img2} alt="hero_Image" />
        <div className="bg-[linear-gradient(90deg,#632EE3,#9F62F2)] p-20">
          <h2 className="lg:text-5xl text-4xl font-bold text-white">
            Trusted by Millions, Built for You
          </h2>
          <section className="mt-12 text-white flex justify-evenly">
            <div className="space-y-4">
              <p className="font-thin text-xs lg:text-[16px]">Total Download</p>
              <h2 className="text-3xl lg:text-6xl font-bold">29.5M</h2>
              <p className="font-thin text-xs lg:text-[16px]">
                21% more than last month
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-thin text-xs lg:text-[16px]">Total Reviews</p>
              <h2 className="text-3xl lg:text-6xl font-bold">906K</h2>
              <p className="font-thin text-xs lg:text-[16px]">
                46% more than last month
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-thin text-xs lg:text-[16px]">Active Apps</p>
              <h2 className="text-3xl lg:text-6xl font-bold">132+</h2>
              <p className="font-thin text-xs lg:text-[16px]">
                31 more will Launch
              </p>
            </div>
          </section>
        </div>
        <h2 className="text-4xl font-semibold mt-12">Trending Apps</h2>
        <p className="text-gray-500 mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
    </>
  );
};

export default Hero;

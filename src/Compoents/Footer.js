import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import Sytle from "./Footer.module.css";
import ItemsComponents from "./ItemsComponents";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 ">
          <span className="text-teal-400">Free</span>until you're ready to Watch
          the home
        </h1>
        <div className="">
          <input
            type="text"
            placeholder="Enter your quries to related to home"
            className="text-gray-800 sm:w-full sm:mr-5 mr-l lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-600 duration-300 px-5 py-2.5 font-[Popins] rounded-md text-white mt-3 sm:ml-3 ml-3">
            Request Call
          </button>
        </div>
      </div>
      <ItemsComponents />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>@ 2023 Appy. All rights reserved.</span>
        <span>Terms . Privacy Policy</span>
        <div className="flex p-12 cursor-pointer w-100 h-100 ">
          <TiSocialFacebook />
          <TiSocialInstagram />
          <TiSocialLinkedin />
          <TiSocialYoutube />
          <TiArrowSortedDown />
          <TiArrowSortedUp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

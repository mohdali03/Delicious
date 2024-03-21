import React from 'react'
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs';

function Footer() {
  return (

    <footer className="bg-black text-white">
      <div className="py-8 mx-auto max-w-screen-xl grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="md:pl-7">
          <h1 className="font-bold text-3xl md:text-4xl">Delicious</h1>
          <p className="text-lg font-medium px-3 pt-2 md:px-0 text-slate-200">Delicious Meals Delivered Daily</p>
          <p className="text-lg font-medium px-3 md:px-0 text-slate-200">Convenient and Reliable Service</p>

        </div>
        <div className="py-4 md:py-0">
          <h1 className="font-bold py-2 text-2xl">Contact Us</h1>
          <ul className="flex flex-col text-slate-200">
            <li className="flex items-center text-lg px-2 gap-2">
              <MdEmail className="" />
              Delicious@gmail.com
            </li>
            <li className="flex items-center text-lg px-2 gap-1">
              <BsFillTelephoneFill className="" />
              +91 123 456 789
            </li>
            <li className="flex items-center text-lg px-2 py-3 gap-2 cursor-pointer">
              <BsFacebook color="white" />
              <BsInstagram sx={{ color: "pink[500]" }} />
              <BsTwitter color="white" />
            </li>
          </ul>
        </div>
        <div className="py-4">
          <h1 className="font-bold text-2xl py-2">Links</h1>
          <ul className="pb-3 text-slate-200" >
            <li className="font-medium pl-2 cursor-pointer hover:text-blue-700">
              <Link to="/">Home</Link>
            </li>
            <li className="font-medium pl-2 cursor-pointer hover:text-blue-700">
              <Link to="/providers">Tiffin Providers</Link>
            </li>
            <li className="font-medium pl-2 cursor-pointer hover:text-blue-700">
              <Link to="/registerProvider">Provider Registration</Link>
            </li>
            <li className="font-medium pl-2 cursor-pointer hover:text-blue-700">
              <Link to="/loginProvider">Provider Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 bg-black text-white">
        <p className="text-normal text-center font-medium sm:text-lg sm:font-serif">
          © Copyright 2024 www.Delicious.com  All rights reserved. Developed by VS
        </p>
      </div>
    </footer>

  )
}

export default Footer;

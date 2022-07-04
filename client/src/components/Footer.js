import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-8 pb-6">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center w-full">
              <h4 className="text-3xl capitalize font-semibold">
                follow us on "<i>the</i>" socials
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
            </div>
            <div className="text-center mt-6">
              <button
                className="text-blue-400 shadow-lg animate-pulse font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter text-orange-500 fa-2x"></i>
              </button>
              <button
                className=" shadow-lg  animate-pulse font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square text-orange-500 fa-2x"></i>
              </button>
              <button
                className="animate-pulse shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-instagram text-orange-500 fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} musclehead
              <span className="text-orange-500">developer.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

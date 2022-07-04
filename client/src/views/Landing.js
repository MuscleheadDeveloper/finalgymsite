import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "assets/img/gym1.jpg";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  useEffect(() => {
    Aos.init({
      delay: 200,
      duration: 1200,
      once: false,
    });
  });
  const history = useHistory();

  return (
    <>
      <main>
        <Navbar transparent />
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "85vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH42QtY6j3vssP6bdrADiu2qzd5Ypq4N06ZUqxb-F9f7Z1i7ppB-ln2D8vMK3q_JmVxYo&usqp=CAU')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    Feel The <span className="text-orange-500">Burn</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Welcome to the OVEN. We are a fitness and wellness cente
                    that focues on pushing you to your absolute limit. Download
                    our complete brochure to get started today!
                  </p>
                  <a
                    href="#contact"
                    className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border inline-block border-orange-500 rounded hover:border-transparent cursor-pointer mt-5"
                  >
                    Speak to one of our experts
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-black -mt-24" id="programs">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div
                data-aos-duration="800"
                data-aos="fade-right"
                className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div
                data-aos-duration="800"
                data-aos="fade-left"
                className="pt-6 w-full md:w-4/12 px-4 text-center"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div
                data-aos-duration="800"
                data-aos="zoom-out"
                className="w-full md:w-5/12 px-4 mr-auto ml-auto"
              >
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div
                  data-aos-duration="800"
                  data-aos="zoom-out"
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
                >
                  <img
                    alt="..."
                    src={logo}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-orange-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20" id="about">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div
                data-aos="fade-right"
                className="w-full md:w-4/12 ml-auto mr-auto px-4"
              >
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={logo}
                />
              </div>
              <div
                data-aos="fade-left"
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
              >
                <div className="md:pr-12">
                  <small className="text-orange-500 uppercase">
                    About our Gym
                  </small>

                  <h3 className="text-4xl uppercase font-bold">
                    Safe Body Building
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3">
                            <i className="fas fa-dumbbell fa-2x text-orange-700"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl ">
                            The latest and greatest gym equipment
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3">
                            <i className="fas fa-users fa-2x text-orange-700"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl ">
                            Three professional trainers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3">
                            <i className="fas fa-hard-hat fa-2x text-orange-700"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl ">
                            5-inch quality foam padding
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">
                  meet our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4">
                  Our trainers are here to dedicate the time and effort that you
                  need to get in the best shape of your life
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <div
                data-aos="flip-right"
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/gym1.jpg").default}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">MuscleFreak</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Aerobics
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="flip-right"
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://images.squarespace-cdn.com/content/v1/5aba5de2f8370a96ad6e10bf/1585001451921-LFW5UFFVI85OSMW3YJH0/gymhooky.png?format=1000w"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Aerobics
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="flip-right"
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/gym3.jpg").default}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Uduak</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Highness
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="flip-right"
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://previews.123rf.com/images/hetmanstock/hetmanstock1908/hetmanstock190801047/128870925-a-beautiful-black-girl-is-engaged-in-a-gym.jpg"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">One More</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Pallates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pb-20 relative block bg-white text-black"
          id="contact"
        >
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">Contact Us</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Contact us to ask any questions, acquire a membership, talk to
                  our trainers or anything else
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div
                  data-aos="fade-up-right"
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                >
                  <form method="POST" action="/">
                    <div className="flex-auto p-5 lg:p-10 bg-orange-500 text-white">
                      <h4 className="text-2xl font-semibold">
                        Want to work with us?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4">
                        Complete this form and we will get back to you in 24
                        hours.
                      </p>
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-xs font-bold mb-2"
                          htmlFor="first-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="FNAME"
                          className="border-0 px-3 py-3 text-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="First Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-xs font-bold mb-2"
                          htmlFor="last-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="LNAME"
                          className="border-0 px-3 py-3 text-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Last Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="border-0 px-3 py-3 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          name="MESSAGE"
                          className="border-0 px-3 py-3  text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Type a message..."
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          type="submit"
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          style={{ transition: "all .15s ease" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

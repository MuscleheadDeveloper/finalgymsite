import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location = "/success";

    const Registered = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    };

    axios
      .post("https://a-gymrat.herokuapp.com/api/login", Registered)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <main>
        <Navbar />
        <section className="bg-black w-full h-full">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full pt-4 py-2 lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        REGISTER
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center"></div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Please Input your Credentials</small>
                    </div>
                    <form onSubmit={handleSubmit} method="POST" action="/login">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-lastName"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-lastName"
                        >
                          lastName
                        </label>
                        <input
                          type="text"
                          name="LNAME"
                          value={lastName}
                          onChange={(e) => setlastName(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="lastName"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="FNAME"
                          value={firstName}
                          onChange={(e) => setfirstName(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="First Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-lastName"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Phone"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}

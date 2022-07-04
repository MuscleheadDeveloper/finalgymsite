import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

function success() {
  return (
    <>
      <Navbar />
      <section className="pt-20 pb-48 bg-black text-white w-full h-screen">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">
              Congratulations
            </h2>
            <p className="text-lg leading-relaxed m-4">
             Thank you for subscribing. Please check your email for a 
             confirmation email from us. We love you.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default success;

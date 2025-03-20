import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold" id="aboutus">
          About Us
        </h1>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="leading-relaxed">
            Founded in 2011 in Meycauayan City, Hommss aims to always maintain
            the utmost levels of service for our customers. We strive to be at
            the forefront of business advisory services within the ceramic
            products industry.
          </p>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            Our mission is to exceed client expectations by offering outstanding
            customer service, increased flexibility, and greater value—thus
            improving operational efficiency.
          </p>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="leading-relaxed">
            We are known for high-quality outcomes and effective growth
            strategies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

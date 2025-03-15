import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <p className="leading-relaxed">
            Founded in 2011 in Meycauayan City. Hommss aims at all times
            maintain the upmost levels of service for our customers and strives
            to place itself at the forefront of business Advisory Services
            within the industry of Ceramic Products.
          </p>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="leading-relaxed">
            Is to exceed the expectations of every client by offering
            outstanding customer service, Increased flexibility, and greater
            value thus improving operations efficiency.
          </p>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <p className="leading-relaxed">
            Known for High Quality Outcomes know for growth stategie
          </p>
        </div>
      </section>

      <footer className="text-center py-6 mt-10 border-t">
        <p>&copy; 2025 HOMMSS Trading Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

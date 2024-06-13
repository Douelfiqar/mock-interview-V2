import React from "react";
import Review from "./Review";

const HerroSection = () => {
  return (
    <div>
      <div className="min-h-screen px-5">
        <h1 className="text-4xl text-center font-black text-neutral tracking-wider capitalize leading-tight mt-8">
          Find trending topics, get inspired, and save time scheduling{" "}
          <span className="text-primary font-black">your posts </span>
        </h1>
        <p className="text-center text-lg mt-8 font-semibold tracking-wide ml-2">
          Our SaaS platform provides a curated selection of content ideas
          tailored to your niche and audience preferences.
        </p>
        <div className="flex justify-center mt-5 h-16">
          <button className="btn btn-primary text-white border-r-4 text-lg px-16 py-4 flex justify-center items-center h-16">
            Generate Free Content
          </button>
        </div>
        <p className="tracking-wide text-center mt-3">
          It's 100% free. Really.
        </p>
        <div className="flex justify-center">
          <div className="container bg-white h-96 w-96 rounded-lg my-8"></div>
        </div>
        <p className="mt-12"></p>
        <Review
          review="I love the simplicity of the platform."
          name="Joe Rogan"
          description="Host of The Joe Rogan Experience"
          img="/Joe-Rogan.jpeg"
        />
        <p className="mt-16"></p>
        <Review
          review="Invaluable tool for influencer brainstorming!"
          name="Piers Morgan"
          description="English broadcaster and writer."
          img="/piers-morgan.webp"
        />
      </div>
    </div>
  );
};

export default HerroSection;

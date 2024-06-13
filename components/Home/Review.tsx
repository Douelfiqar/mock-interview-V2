import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
interface ReviewProps {
    review: string;
    name: string;
    description: string;
    img: string;
}
const Review = ({review, name, description, img}:ReviewProps) => {
  return (
    <div>
      <div className="flex justify-center items-center text-xl font-bold">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
      <p className="text-center text-lg mt-4 tracking-wide font-semibold">
        {review}
      </p>
      {/* I love the simplicity of the platform.  */}
      {/* It's easy to use and has */}
        {/* everything I need to manage my social media accounts. */}
      <div className="flex justify-center mt-5">
        <Image
          src={img}
          alt="joe-rogan"
          className="rounded-full"
          width={60}
          height={60}
        />
        <div className="ml-3">
          <h4 className="tracking-wider font-bold">{name}</h4>
          <p className="tracking-wider">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

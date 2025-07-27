import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // for animations

const bannerImages = [
  "https://i.ibb.co/HDXhPLkk/bedroom-with-a-black-wall-and-large-windows-1.jpg",
  "https://i.ibb.co/n8f70Pv4/comfortable-living-room-cat.jpg",
  "https://i.ibb.co/ZzH53zjL/open-plan-kitchen-with-wooden-fixtures.jpg",
  "https://i.ibb.co/zTg8HKn9/family-room-with-large-screen-doors.jpg",
];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <div className="relative w-full md:h-[65vh] lg:h-[80vh] h-auto rounded-xl overflow-hidden shadow-2xl ">
      {/* Image Carousel */}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
        arrows={false}
        showDots={false}
        className="h-full"
      >
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`banner-${index}`}
            loading="lazy"
            className="w-full h-full object-cover z-0"
          />
        ))}
      </Carousel>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] via-[#00000088] to-[#00000055] z-10" />

      {/* Animated Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            Luxurious Living at Your Fingertips
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Explore premium apartments with modern amenities, all in one building. Safe. Smart. Stylish.
          </p>
        </motion.div>
      </div>

      {/* Optional Blur Edge Effect */}
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xsm z-[5]" />
    </div>
  );
};

export default Banner;

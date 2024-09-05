import { useState, useEffect } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import { Link } from "react-router-dom";

const images = [image1, image2, image3, image4, image5, image6];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(nextImage);
      setNextImage((nextImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextImage]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentImage ? 1 : 0,
            zIndex: index === currentImage ? 0 : -1,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white text-center px-4 max-w-4xl">
        <h1 className="text-5xl font-semibold mb-4 font-manrope">
          Discover the Art of Visual Storytelling
        </h1>
        <h3 className="text-2xl mb-8 font-manrope">
          Step into the world of visual storytelling and discover how a single
          frame can tell an entire story.
        </h3>
        <Link
          to="/explore"
          className="bg-white text-black py-2 px-6 rounded-full hover:bg-opacity-50 transition duration-300"
        >
          Explore
        </Link>
      </div>

      {/* Login/Signup Button */}
      <Link
        to="/auth"
        className="absolute top-4 right-4 bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 z-30"
      >
        Login / Sign Up
      </Link>
    </div>
  );
}

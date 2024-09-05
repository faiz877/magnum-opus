import { images, ImageData } from "../data/imageData";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div>
      <div id="explore-section" className="mx-auto px-4 py-8 relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-3xl font-manrope font-bold mb-8">Explore</h3>
          <Link
            to="/auth"
            className="absolute top-8 right-4 bg-blue-600 border  text-white py-2 px-4 rounded-full hover:bg-blue-600/80 hover:text-black transition duration-300 "
          >
            Sign Up/Login
          </Link>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image: ImageData) => (
            <div key={image.id} className="mb-4 break-inside-avoid">
              <div className="relative group">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-lg font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                  <p className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.movie} ({image.year})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call-to-action section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-manrope font-bold mb-4">
            Want to explore more?
          </h2>
          <p className="text-lg mb-6">
            Sign up or log in to see our full collection of iconic movie scenes.
          </p>
          <div className="space-x-4">
            <Link
              to="/auth/signup"
              className=" font-manrope bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/auth"
              className="font-manrope bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

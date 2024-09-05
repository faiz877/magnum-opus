const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400 max-w-md">Discover the art of visual storytelling with our curated collection of stunning images.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">
                <a href="mailto:contact@gmail.com" className="hover:text-white">contact@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Magnum Opus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;    
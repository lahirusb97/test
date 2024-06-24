import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <div className="bg-purple-600 text-white p-8 mt-auto">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>

        <h2 className="text-2xl font-bold mb-4">Pets square</h2>
        <h3 className="text-xl mb-2">Join us</h3>
        <p className="mb-4">Sign up to our mailing list to receive updates, exclusive offers and deals!</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email..."
            className="p-2 rounded-l-md text-black w-full"
          />
          <button className="bg-gray-500 text-white p-2 rounded-r-md hover:bg-gray-700">
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <ul>
          <li className="mb-2">
            <Link to="/blog" className="hover:underline">Blog</Link>
          </li>
          <li className="mb-2">
            <Link to="/stock-list" className="hover:underline">Stock list</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
        <ul>
          <li className="mb-2">
            <Link to="/contact-us" className="hover:underline">Contact us</Link>
          </li>
          <li className="mb-2">
            <Link to="/faqs" className="hover:underline">FAQs</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-200">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://whatsapp.com" className="hover:text-gray-200">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://tiktok.com" className="hover:text-gray-200">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;



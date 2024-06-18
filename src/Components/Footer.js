//Update p-aboutus, links to Legal
import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto py-8 px-8 lg:px-10 mt-8 grid lg:grid-cols-3 gap-8 text-white bg-black">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#25d366]">
          Stat<span className="text-white">Leap</span>
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-bold text-[#25d366]">Quick Links</h6>
          <ul>
            <li className="p-2 font-sm whitespace-nowrap">
              <Link to="/tools">ML kits</Link>
            </li>
            <li className="p-2 font-sm whitespace-nowrap">
              <Link to="/case-studies">Blogs</Link>
            </li>
            <li className="p-2 font-sm whitespace-nowrap">
              <Link to="/plans">Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-[#25d366]">Support</h6>
          <ul>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">
              Refund & <br />
              Cancellation
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-[#25d366]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">FAQs</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-[#25d366]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="#"></a>Claim</li>
            <li className="py-2 text-sm">
              <a href="#"></a>Policy</li>
            <li className="py-2 text-sm">
              <a href="#"></a>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;

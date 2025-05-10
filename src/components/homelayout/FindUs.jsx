import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item"><FaFacebook />Facebook</button>
        <button className="btn bg-base-100 justify-start join-item"><FaXTwitter /> XTwitter </button>
        <button className="btn bg-base-100 justify-start join-item"><SiInstagram />Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;

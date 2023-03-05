import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import SocialButton from "./social-buttons/SocialButton";
import RavilImage from "../assets/ravil.jpeg";

function HeroSection() {
  return (
    <section className="bg-gradient-to-t from-blue-100 to-blue-200 min-h-screen flex flex-grow flex-col justify-center items-center">
      <div className="container text-center">
        <div className="flex justify-center mb-8">
          <img
            src={RavilImage}
            className="rounded-full w-72 h-72 object-cover"
          />
        </div>
        <h1 className="text-7xl font-extrabold uppercase">Mango Sheikh</h1>
        <h3 className="text-4xl font-medium text-blue-600 mt-3">
          Software Engineer
        </h3>
        <p className="font-medium text-gray-700 mt-5">
          Solution-oriented and problem solver with 2 years of experience
          <br />
          building and maintaining software and software architecture
        </p>
        <div className="social-buttons flex gap-3 justify-center mt-12">
          <SocialButton
            Icon={FaLinkedin}
            url="https://www.linkedin.com/in/ravilshaikh/"
          />
          <SocialButton Icon={FaTwitter} url="https://www.facebook.com/" />
          <SocialButton Icon={FaEnvelope} url="mailto:ravilshaikh@gmail.com" />
          <SocialButton Icon={FaFacebook} url="https://www.facebook.com/" />
          <SocialButton
            Icon={FaInstagramSquare}
            url="https://www.facebook.com/"
          />
          <SocialButton Icon={FaPhoneAlt} url="tel:+918826615129" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

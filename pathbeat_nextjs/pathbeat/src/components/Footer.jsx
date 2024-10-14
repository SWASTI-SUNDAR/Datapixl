import React from "react";
import { NavData } from "../data/NavData";
import Button from "./Button";
import Link from "next/link"; // Next.js Link
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="px-5 lg:px-28 flex flex-col gap-3 shadow-lg border-t-2 mt-5 pt-6">
      <div className="flex justify-between lg:flex-row flex-row">
        <div className="w-full flex justify-between lg:gap-16 flex-col lg:flex-row gap-5">
          {/* Navigation Links */}
          <div className="hidden items-start justify-start flex-col gap-3">
            {NavData.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-5">
                  <Link className="font-small hover:scale-105 cursor-pointer" href={`/${item.to}`} passHref>
                      {item.title}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Social Media Links for Mobile */}
          <div className="flex lg:hidden justify-center items-center m-auto gap-6 ml-8 p-2 w-[90%]">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Secondary Links */}
          <div
            className="flex gap-16 sm:gap-24 justify-start lg:w-full"
            style={{ margin: "auto" }}
          >
            {Data.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2 sm:gap-5">
                  <Link
                    className="font-small hover:scale-105 cursor-pointer"
                    href={`/${item.to}`}
                    passHref
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Social Media Links for Desktop */}
          <div className="hidden lg:flex gap-8 px-2">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <p className="text-3xl">{social.icon}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="hidden flex flex-col gap-3">
          <h1>Subscribe</h1>
          <span>
            Join our mailing list to receive updates and special offers.
          </span>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 w-1/2 border border-gray-300 rounded-md"
            />
            <Button className="bg-[#51A1FF] text-white p-2 rounded-md">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* QR Code and App Links */}
      <div className="hidden flex gap-5 items-center">
        <img src="/whyus/qr-code.png" alt="QR Code" />
        <div className="flex justify-end items-end gap-3">
          <Link href="/whyus/play-store.png" passHref>
              <img
                src="/whyus/play-store.png"
                className="w-[45%] object-contain hover:scale-90 duration-300 h-12 lg:w-auto"
                alt="Play Store"
              />
          </Link>
          <Link href="/whyus/app-store.png" passHref>
              <img
                src="/whyus/app-store.png"
                className="w-[45%] object-contain hover:scale-90 duration-300 h-12 lg:w-auto"
                alt="App Store"
              />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0.5 bg-black"></div>

      {/* Footer Text */}
      <div className="flex justify-center">
        <span>© 2024 Pathbeat India Technologies Pvt Ltd</span>
      </div>
    </div>
  );
};

export default Footer;

// Data for Secondary Links
const Data = [
  {
    title: "Privacy Policy",
    to: "privacy-policy",
  },
  {
    title: "Terms of Usage",
    to: "terms-of-service",
  },
];

// Social Media Links
const socialMedia = [
  {
    icon: <FaFacebookF size={32} />,
    url: "https://www.facebook.com/profile.php?id=61557427462721",
  },
  {
    icon: <FaTwitter size={32} />,
    url: "https://x.com/path_beat_india",
  },
  {
    icon: <IoLogoInstagram size={32} />,
    url: "https://www.instagram.com/pathbeatindia/",
  },
  {
    icon: <TfiYoutube size={32} />,
    url: "https://www.youtube.com/@PathBeatIndia",
  },
];

import React from "react";
import { PopupButton } from "react-calendly";
import SecButton from "./SecButton";
import { motion } from "framer-motion";
const Meet = () => {
  const meeturl = import.meta.env.VITE_CALENDLY_LINK;
  return (
    <div>
      <PopupButton
        className="px-4 py-2 border  text-primary font-semibold bg-white rounded-md focus:outline-none focus:ring"
        url={meeturl}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */

        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      ></PopupButton>
    </div>
  );
};

export default Meet;

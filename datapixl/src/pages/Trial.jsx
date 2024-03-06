import React from "react";
import SecButton from "../components/SecButton";

const Trial = () => {
//   const history = useHistory();
//   const handleReadMoreClick = () => {
//     // Open a new tab when the button is clicked
//     history.push("/service-page");
//     window.open("/casestudy-1", "_blank");
//   };
  return (
    <div>
      <SecButton>
        <a href="xyz" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </SecButton>
    </div>
  );
};

export default Trial;

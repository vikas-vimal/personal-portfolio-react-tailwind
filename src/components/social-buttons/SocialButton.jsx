import { element, string } from "prop-types";
import React from "react";

function SocialButton({ Icon, url }) {
  return (
    <a
      href={url || "/"}
      target="_blank"
      className="inline-block p-2 bg-white rounded-xl shadow-sm hover:bg-gray-100"
    >
      <Icon size={18} />
    </a>
  );
}

SocialButton.propTypes = {
  Icon: element,
  url: string,
};

export default SocialButton;

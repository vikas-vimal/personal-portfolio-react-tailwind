import { element, number, string } from "prop-types";
import React from "react";

function LanguageItem({
  title,
  subtitle,
  progressValue = 80,
  Icon,
  iconClass,
  className = "",
}) {
  return (
    <div
      className={`programming-languages bg-white h-16 p-5 mb-4 rounded-xl cursor-pointer flex items-center ${className}`}
    >
      <div className="flex flex-row justify-start items-center">
        {Icon && (
          <div className="mr-5">
            <Icon size={26} className={iconClass} />
          </div>
        )}
        <div className="w-full">
          <h6 className="font-medium pb-0 leading-4 mt-2">{title}</h6>
          <small className="text-gray-600 font-medium">{subtitle}</small>
        </div>
      </div>
    </div>
  );
}

LanguageItem.propTypes = {
  title: string,
  subtitle: string,
  progressValue: number,
  Icon: element,
  iconClass: string,
  className: string,
};

export default LanguageItem;

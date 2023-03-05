import { number, string } from "prop-types";
import React from "react";

function Skill({ title, subtitle, progressValue = 80, className = "" }) {
  return (
    <div
      className={`skill hover:bg-blue-800 hover:bg-opacity-10 px-3 rounded-lg cursor-pointer ${className}`}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <h6 className="font-medium">{title}</h6>
        <small className="text-gray-600 font-medium">{subtitle}</small>
      </div>
      {progressValue && (
        <div className="progress-container h-2 mt-2 rounded-xl overflow-hidden">
          <div className="progress-track bg-gray-800 bg-opacity-10 h-full">
            <div
              className="progress-bar bg-blue-600 h-full"
              style={{ width: `${Math.ceil(progressValue)}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

Skill.propTypes = {
  title: string,
  subtitle: string,
  progressValue: number,
  className: string,
};

export default Skill;

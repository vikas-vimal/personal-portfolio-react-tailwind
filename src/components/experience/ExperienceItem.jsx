import React from "react";

function ExperienceItem({
  jobTitle,
  startDate,
  endDate,
  companyName,
  companyDescription,
  children,
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-row justify-start items-baseline mt-4">
        <h3 className="text-blue-600 font-bold">{jobTitle}</h3>
        <div className="font-medium text-sm text-gray-600 ml-3">
          ({startDate} - {endDate})
        </div>
      </div>
      <div className="mb-3 mt-2">
        <h4 className="text-black font-semibold">{companyName}</h4>
        <p className="text-black">{companyDescription}</p>
      </div>
      {children}
    </div>
  );
}

export default ExperienceItem;

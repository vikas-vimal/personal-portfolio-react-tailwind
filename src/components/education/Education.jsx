import React from "react";
import ExperienceItem from "../experience/ExperienceItem";

function Education({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <h2>Education</h2>
        <ExperienceItem
          jobTitle="B.TECH (COMPUTER ENGINEERING)"
          startDate="08/2017"
          endDate="06/2021"
          companyName="Jamia Millia Islamia"
          companyDescription="SGPA : 9.40"
        />
      </div>
    </div>
  );
}

export default Education;

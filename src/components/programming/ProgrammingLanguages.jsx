import React from "react";
import { FaJava, FaJsSquare, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import LanguageItem from "./LanguageItem";

const dataList = [
  {
    title: "Javascript",
    Icon: FaJsSquare,
    iconClass: "text-yellow-500",
    subtitle: "Full Professional Proficiency",
    value: 90,
  },
  {
    title: "TypeScript",
    Icon: SiTypescript,
    iconClass: "text-blue-700",
    subtitle: "Full Professional Proficiency",
    value: 90,
  },
  {
    title: "Python",
    Icon: FaPython,
    iconClass: "text-blue-700",
    subtitle: "Professional Working Proficiency",
    value: 90,
  },
  {
    title: "Java",
    Icon: FaJava,
    iconClass: "text-red-600",
    subtitle: "Professional Working Proficiency",
    value: 90,
  },
];

function ProgrammingLanguages({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <h2 className="mb-6">Languages</h2>
        <ul>
          {dataList.length &&
            dataList.map((item) => (
              <li key={item.title}>
                <LanguageItem
                  Icon={item.Icon}
                  iconClass={item.iconClass}
                  title={item.title}
                  subtitle={item.subtitle}
                  progressValue={null}
                  className="py-1"
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgrammingLanguages;

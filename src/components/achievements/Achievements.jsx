import React from "react";
import { FaTrophy } from "react-icons/fa";

const achievementsList = [
  {
    title: "Zoo Hackathon Participation",
    subtitle: null,
    description:
      "A Secured Connection between different organisations to work together for the conservation of Wildlife Trafficking.",
    dateTime: null,
  },
  {
    title: "Data Structure & Algorithm Certification",
    subtitle: null,
    description: "A certified course of data structure from coding blocks",
    dateTime: "06/2019 - 04/2022",
  },
];

function Achievements({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <h2 className="mb-6">Achievements</h2>
        <ul>
          {achievementsList.length &&
            achievementsList.map((item) => (
              <li key={item.title}>
                <div className="my-4 flex justify-start items-start">
                  <div className="inline-block p-3 bg-blue-300 bg-opacity-30 rounded-xl mr-3 mt-2">
                    <FaTrophy size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <h5>{item.title}</h5>
                    {item.dateTime && (
                      <div className="text-gray-800 text-sm mb-1">
                        ({item.dateTime})
                      </div>
                    )}
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Achievements;

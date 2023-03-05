import React from "react";
import Skill from "./Skill";

const skillsList = [
  {
    title: "Javascript/TypeScript",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "ExpressJs/NestJs",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "MySQL",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Redis",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "DynamoDB",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Mongoose",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Spring Boot",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Fast API",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "AWS Neptune",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "MongoDB",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "ElasticSearch",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "RabbitMQ",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "SQS",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Docker",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Kubernetes",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Amazon Web Services",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "Android Development",
    subtitle: "90%",
    value: 90,
  },
  {
    title: "React JS",
    subtitle: "90%",
    value: 90,
  },
];

function TechnicalSkills({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <h2>Technical Skills</h2>
        <ul>
          {skillsList.length &&
            skillsList.map((skill) => (
              <li key={skill.title}>
                <Skill
                  title={skill.title}
                  subtitle={skill.subtitle}
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

export default TechnicalSkills;

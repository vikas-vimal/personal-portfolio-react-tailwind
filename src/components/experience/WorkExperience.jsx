import React from "react";
import ExperienceItem from "./ExperienceItem";

function WorkExperience({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <h2>Work Experience</h2>
        <ExperienceItem
          jobTitle="Senior Backend Developer"
          startDate="01/2022"
          endDate="Present"
          companyName="Hood Internet Private Limited"
          companyDescription="A new-age Pseudonymous Social Network | Discover Truth. Featured in Shark Tank India 2"
        >
          <ul className="list-disc list-outside list-item ml-4">
            <li>
              Handling an incredibly high server load of 150k req/sec while
              simultaneously processing more than 50k posts and 80k comments
              during SharkTankIndia.
            </li>
            <li>
              Design and architect the backend schema and API on NestJs
              Framework (module-based architecture).
            </li>
            <li>
              Designing and configuration of the application layer of the
              product with EC2, RDS, DynamoDb, Elastic Search, Amazon Neptune,
              Elastic Cache & RabbitMQ.
            </li>
            <li>
              Configuration of elastic load balancer (ELB) for traffic control
              for the EC2 and attaching multiple instance to target groups.
            </li>
            <li>
              Implemented feed algorithm and created user timeline in Redis and
              DynamoDb . Sync device contacts and created user timeline. Used
              DynamoDb as time-series database for storing user's timeline data.
            </li>
            <li>
              Used Aws-Neptune for storing user's characteristic and analyzing
              user relationship.
            </li>
            <li>
              Deploy all micro-services on Kubernetes with pods on auto scale
              with increase in traffic.
            </li>
          </ul>
        </ExperienceItem>

        <ExperienceItem
          jobTitle="Backend Developer"
          startDate="01/2021"
          endDate="12/2021"
          companyName="Primathon Ventures Private Limited"
          companyDescription="A Global Investing Platform helping investors from India & Middle East invest in US listed."
        >
          <ul className="list-disc list-outside list-item ml-4">
            <li>
              Worked for RIVIGO a logistic based startup working on a relay as a
              service (RAAS) project.
            </li>
            <li>
              Leading a Backend of Job Portal Application Project. Design &
              Develop schema in NodeJs & MongoDb. Integrated socket.io for real
              time chat between company and candidate.
            </li>
            <li>Train and deploy Job Recommendation System using FastApi.</li>
            <li>
              Design and Develop a Customer Review Application on Shopify
              Development Store in ReactJS. Integrated Aws- Textract for
              extracting text from image.
            </li>
          </ul>
        </ExperienceItem>

        <ExperienceItem
          jobTitle="Android Developer"
          startDate="04/2020"
          endDate="08/2020"
          companyName="EasyEat"
          companyDescription="EasyEat is a contactless solution that digitises and enhances customer-facing interaction in restaurants."
        >
          <ul className="list-disc list-outside list-item ml-4">
            <li>
              Design & Develop Android Application for online food ordering
              which is currently running in Malaysia.
            </li>
            <li>
              Integrated all Backend API's into the app using Volley Library.
              Interaction of User App and Database using MQTT socket setup.
            </li>
          </ul>
        </ExperienceItem>
      </div>
    </div>
  );
}

export default WorkExperience;

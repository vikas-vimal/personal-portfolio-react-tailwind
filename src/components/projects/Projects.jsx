import React from "react";
import { FcOpenedFolder } from "react-icons/fc";

const projectsList = [
  {
    title: "AudioVersity (Music Platform)",
    subtitle: null,
    description: (
      <>
        A new music platform between artists and user. Design and architect the
        backend schema and Api on <strong>NestJs Mongoose Framework</strong>.
        Integrated Spotify's Web API to discover music and podcasts. End to end
        deployment on EC2 instance and configure nginx.
      </>
    ),
    dateTime: "09/2022 - 12/2022",
  },
  {
    title: "CamScan Application",
    subtitle: null,
    description: (
      <>
        A document scanner and pdf maker application. Capture images using{" "}
        <strong>CameraX</strong> library. Crop and apply filter on the images
        using <strong>RenderScript</strong> and stored scanned images on{" "}
        <strong>Room Database</strong>.
      </>
    ),
    dateTime: "07/2021 - 09/2021",
  },
];

function Projects({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <h2 className="mb-6">Projects</h2>
        <ul>
          {projectsList.length &&
            projectsList.map((item) => (
              <li key={item.title}>
                <div className="my-4 flex justify-start items-start">
                  <div className="inline-block p-3 bg-white bg-opacity-80 rounded-xl mr-3 mt-2">
                    <FcOpenedFolder size={30} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-start items-baseline">
                      <h5 className="">{item.title}</h5>
                      {item.dateTime && (
                        <div className="text-gray-500 text-sm ml-3">
                          ({item.dateTime})
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

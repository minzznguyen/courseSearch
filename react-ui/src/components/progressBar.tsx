import React from "react";
import { PresProps } from "../types";
const ProgressBar = (props: PresProps) => {
  const prerequisites = props.items

  const prereqlength = (100 / prerequisites.length).toString() + "%";
  console.log(prereqlength);

  const FinishedCircle = () => {
    return (
      <div className="circle flex-1">
        <div className="w-8 h-8 bg-indigo-500 mx-auto rounded-full text-lg text-white flex items-center">
          <span className="text-white text-center w-full">
            <i className="fa fa-check w-full fill-current white"></i>
          </span>
        </div>
      </div>
    );
  };
  const UnfinishedCircle = () => {
    return (
      <div className="circle flex-1">
        <div className="w-8 h-8 bg-white border-2 border-gray-200 mx-auto rounded-full text-lg text-white flex items-center">
          <span className="text-grey-darker text-center w-full">3</span>
        </div>
      </div>
    );
  };

  const FinishedBar = () => {
    return (
      <div className="bar w-1/6 items-center align-middle content-center flex ">
        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
          <div
            className="bg-indigo-500 text-xs leading-none py-1 text-center text-grey-darkest rounded"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
    );
  };
  const UnfinishedBar = () => {
    return (
      <div className="bar w-1/6 align-center items-center align-middle content-center flex">
        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
          <div
            className="bg-indigo-500 text-xs leading-none py-1 text-center text-grey-darkest rounded"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-xl mx-auto my-4 pb-4">
      <div className="image-section flex pb-3 px-10">
        <FinishedCircle />

        {prerequisites.slice(1).map((course) => {
          return (
            <>
                {course.finished ? (
                    <>
                        <FinishedBar />
                        <FinishedCircle />
                    </>
                ): (
                    <>
                        <UnfinishedBar />
                        <UnfinishedCircle />
                    </>
                )}
            </>
          );
        })}
        
       

      </div>
      <div className="flex text-xs content-center text-center">
        {prerequisites.map((course) => (
          <div key={course.name} style={{ width: prereqlength }}>
            {course.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

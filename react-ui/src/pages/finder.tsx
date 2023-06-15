import React from "react";

const FinderPage = () => {
  const dummyList = [
    {
      code: "EGN 3000",
      title: "Foundation of Engineering",
      prerequisite: ["EGN 3000", "EGN 3000L", "EGN 3001", "EGN 3002"],
    },
    {
      code: "EGN 3000",
      title: "Foundation of Engineering",
      prerequisite: ["EGN 3000", "EGN 3000L", "EGN 3001", "EGN 3002"],
    },
    {
      code: "EGN 3000",
      title: "Foundation of Engineering",
      prerequisite: ["EGN 3000", "EGN 3000L", "EGN 3001", "EGN 3002"],
    },
  ];
  return (
    <div>
      <>FinderPage</>
      <p>---------------------------------------------------</p>
      {/* forEach doesnt return anything, while map return a list of tags */}
      {dummyList.map((course) => (
        <div key={course.code}>

            <h3>{course.code}: {course.title}</h3>
            <p>{course.prerequisite.join(' --> ')}</p>
            <p>---------------------------------------------------</p>
        </div>
      ))}
    </div>
  );
};

export default FinderPage;
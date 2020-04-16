import React from "react";
import userResources from "../hooks/userResources";

const ResourceList = ({ resource }) => {
  const resources = userResources(resource);

  return (
    <div>
      <ul>
        {resources.map((record) => {
          return <li key={record.id}>{record.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default ResourceList;

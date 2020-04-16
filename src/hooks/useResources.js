import { useState, useEffect } from "react";
import jsonPlaceHolder from "../api/jsonPlaceHolder";

export default (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    console.log("componentDidMount");
    const response = await jsonPlaceHolder.get(`/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
    // or
    // (async (resource) => {
    //   console.log("componentDidMount");
    //   const response = await jsonPlaceHolder.get(`/${resource}`);
    //   setResources(response.data);
    // })(resource);
  }, [resource]);

  return resources;
};

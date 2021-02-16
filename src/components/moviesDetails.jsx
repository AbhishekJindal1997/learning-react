import React, { Component } from "react";

const MoviesDetails = ({ movieid }) => {
  console.log("id", movieid);
  return (
    <>
      <h1>uhu{movieid}</h1>
      <button>Save</button>
    </>
  );
};

export default MoviesDetails;

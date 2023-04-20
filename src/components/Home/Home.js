import React from "react";
import Navbar from "../NavBar/Navbar";

const Home = () => {
const user={
  firstName:'Nicolas',
  lastName:'Hervith'
}

  return (
    <>
      <Navbar user={user} />
    </>
  );
};

export default Home;

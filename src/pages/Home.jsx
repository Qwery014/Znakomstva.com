import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PeopleList from "../components/PeopleList";
import "../styles/homePage.scss";

const Home = () => {
  return (
    <>
      <Header />
      <PeopleList />
      <Footer />
    </>
  );
};

export default Home;

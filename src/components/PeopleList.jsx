import React, { useEffect } from "react";
import PeopleCard from "./PeopleCard";
import AOS from "aos";
import "aos/dist/aos.css";

const PeopleList = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="home-page">
      <div className="container">
        <div className="recommendation__block top-people">
          <h2 className="recommendation__header">Топ для знакомств</h2>
          <div className="recommendation__list">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
          </div>
        </div>
        <div className="recommendation__block top-people">
          <h2 className="recommendation__header">Ищу парня</h2>
          <div className="recommendation__list">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
          </div>
        </div>
        <div className="recommendation__block top-people">
          <h2 className="recommendation__header">Ищу девушку</h2>
          <div className="recommendation__list">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PeopleList;

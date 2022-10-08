import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useUsers } from "../context/UsersContextProvider";
import axios from "axios";
import { API } from "../helpers/consts";
import "../styles/homePage.scss";

const PeopleList = () => {

  const { getUsers, users } = useUsers()

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    getUsers()
  }, [])









  return (
    <main className="home-page">
      <div className="container">
        <div className="recommendation__block top-people">
          <h2 className="recommendation__header">Топ для знакомств</h2>
          <div className="recommendation__list">
            {
              console.log(users)
            }
            {
              users.length ? (
                users.map((e, i) => {
                  if (i < 5) {
                    return <PeopleCard item={e} key={e.id} />
                  }
                })
              ) : (
                console.log("No")
              )
            }
          </div>
        </div>
        <div className="recommendation__block top-people">
          <h2 className="recommendation__header">Мужчины</h2>
          <div className="recommendation__list">
            {
              users.length ? (
                users.map((e, i) => {
                  if (i < 5 && e.gender == "female") {
                    return <PeopleCard item={e} key={e.id} />
                  }
                })
              ) : (
                console.log("No")
              )
            }
          </div>
        </div>
        <div className="recommendation__block top-people">
          <h2 className="recommendation__header">Женщины</h2>
          <div className="recommendation__list">
          {
              users.length ? (
                users.map((e, i) => {
                  if (i < 5 && e.gender == "male") {
                    return <PeopleCard item={e} key={e.id} />
                  }
                })
              ) : (
                console.log("No")
              )
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default PeopleList;

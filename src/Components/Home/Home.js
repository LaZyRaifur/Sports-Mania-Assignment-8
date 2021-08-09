import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Leagues from "../Leagues/Leagues";
import '../Home/Home.css';

const Home = () => {
    const [leagues,setLeagues] = useState([])

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php/`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setLeagues(data.leagues))
    },[])
  return (
    <div>
      <Header></Header>
      <div className="home-container">
        {
            leagues.map(league =><Leagues leagues={league}></Leagues>)
        }
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import banner from "../images/header-images.jpg";
import male from "../images/male.png";
import female from "../images/female.png";
import "../LeagueDetail/LeagueDetails.css";
import location from "../../Icon/found.png";
import flag from "../../Icon/flag.png";
import football from "../../Icon/football.png";
import gender from "../../Icon/gender.png";
import fb from "../../Icon/Facebook.png";
import twitter from "../../Icon/Twitter.png";
import youTube from "../../Icon/YouTube.png";

const LeagueDetail = (props) => {
  const { idLeague } = useParams();
  const [leagueDetail, setLeagueDetail] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueDetail(data.leagues[0]));
  }, [idLeague]);
  return (
    <div className="details-style">
      <div className="header-container">
        <img src={banner} alt="" />
        <div className="logo">
          <img src={leagueDetail.strBadge} alt="" />
        </div>
      </div>
      <div className="card-container">
        <div className="card-text">
          <h1>{leagueDetail.strLeagueAlternate}</h1>
          <p>
            {" "}
            <img
              src={location}
              alt=""
              style={{ width: "15px" }}
            /> Founded: {leagueDetail.intFormedYear}
          </p>
          <p>
            <img src={flag} alt="" style={{ width: "15px" }} /> Country:{" "}
            {leagueDetail.strCountry}
          </p>
          <p>
            <img src={football} alt="" style={{ width: "15px" }} /> Sports Type:{" "}
            {leagueDetail.strSport}
          </p>
          <p>
            <img src={gender} alt="" style={{ width: "15px" }} /> Gender:{" "}
            {leagueDetail.strGender}
          </p>
        </div>
        <div className="card-img">
          {leagueDetail.strGender ? (
            <img src={male} alt="" />
          ) : (
            <img src={female} alt="" />
          )}
        </div>
      </div>

      <div className="description">
        <p>{leagueDetail.strDescriptionEN}</p>
        <br />

        <p>{leagueDetail.strDescriptionEN}</p>
      </div>

      <div className="footer">
      {/* <div className="twitter"><a href={leagueDetail.strTwitter} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></div> */}
       <a href={leagueDetail.strFacebook}>
       <img
          src={fb}
          alt=""
          style={{ width: "50px", height: "50px", margin: "10px" }}
        />
       </a>
        <a href={leagueDetail.strTwitter}>
        <img
          src={twitter}
          alt=""
          style={{ width: "50px", height: "50px", margin: "10px" }}
        />
        </a>
       <a href={leagueDetail.strYoutube}>
       <img
          
          src={youTube}
          alt=""
          style={{ width: "50px", height: "50px", margin: "10px" }}
        />
       </a>
      </div>
    </div>
  );
};

export default LeagueDetail;

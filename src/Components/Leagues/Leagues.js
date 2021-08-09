import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Leagues.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';



const Leagues = (props) => {
  const { idLeague, strSport, strLeagueAlternate } = props.leagues;

  const history = useHistory();
  const showLeagueDetail = id =>{
      const url = `leagues/${id}`;
      history.push(url);
  }

  const [details, setDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.leagues[0]));
  }, [idLeague]);

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img className="card-image" variant="top" src={details.strBadge} />
      <Card.Body>
        <Card.Title><h4>{strLeagueAlternate}</h4> </Card.Title>
        <p className="sports-text">Sports type: {strSport}</p>
        <Button  onClick={()=>showLeagueDetail(idLeague)} variant="contained" color="primary"> Explore  <FontAwesomeIcon icon={faArrowRight}/></Button>
      </Card.Body>
    </Card>
  );
};

export default Leagues;

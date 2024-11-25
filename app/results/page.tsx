"use client";

import React from "react";
import MatchDetails from "../components/MatchDetails";
import Navbar from "../components/NavBar";
import "../styles/styles.css"; // Adjust the path if needed

const Results: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="results-page">
        <MatchDetails
          homeTeam="Salhill Devon"
          awayTeam="Bearna Na Forbacha"
          score="1 - 0"
          gameWeek={6}
        />
        <MatchDetails
          homeTeam="Oranmore/Maree"
          awayTeam="Salthill Devon"
          score="1 - 2"
          gameWeek={5}
        />
        <MatchDetails
          homeTeam="Ballinasloe"
          awayTeam="Salthill Devon"
          score="6 - 1"
          gameWeek={4}
        />
        <MatchDetails
          homeTeam="Salthill Devon"
          awayTeam="Gort"
          score="4 - 2"
          gameWeek={3}
        />
        <MatchDetails
          homeTeam="Salthill Devon"
          awayTeam="East Galway"
          score="1 - 6"
          gameWeek={2}
        />
        <MatchDetails
          homeTeam="Salthill Devon"
          awayTeam="Renmore"
          score="2 - 3"
          gameWeek={1}
        />
      </div>
    </>
  );
};

export default Results;

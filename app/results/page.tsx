"use client";

import React from "react";
import MatchDetails from "../components/MatchDetails";
import Navbar from "../components/NavBar";
import results from "../data/results.json";
import "../styles/styles.css"; // Adjust the path if needed

const Results: React.FC = () => {
  // Sort results by gameWeek descending (latest first)
  const sortedResults = [...results].sort((a, b) => b.gameWeek - a.gameWeek);
  return (
    <>
      <Navbar />
      <div className="results-page">
        {sortedResults.map((match) => (
          <MatchDetails key={match.gameWeek} gameWeek={match.gameWeek} />
        ))}
      </div>
    </>
  );
};

export default Results;

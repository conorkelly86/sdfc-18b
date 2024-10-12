"use client";

import React from "react";
import MatchDetails from "../components/MatchDetails";
import "../styles/styles.css"; // Adjust the path if needed
import Navbar from "../components/NavBar";

interface GoalScorer {
  name: string;
  team: "home" | "away"; // Union type for team
  minute: number;
}

interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
  goalScorers: GoalScorer[];
}

const Results: React.FC = () => {
  // Annotate the type of matches
  const matches: Match[] = [
    {
      homeTeam: "Renmore",
      awayTeam: "Salthill Devon",
      score: "2 - 3",
      goalScorers: [
        { name: "Kian O'Connell", team: "away", minute: 15 },
        { name: "Matthew Hosty", team: "away", minute: 45 },
        { name: "George Gallagher", team: "away", minute: 78 },
      ],
    },
    {
      homeTeam: "Salthill Devon",
      awayTeam: "East Galway",
      score: "1 - 6",
      goalScorers: [{ name: "Luke Mangan", team: "away", minute: 30 }],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="results-page">
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

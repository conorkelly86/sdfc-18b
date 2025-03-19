"use client";

import React, { useEffect, useState } from "react";
import "../styles/styles.css"; // Adjust the path if needed
import Navbar from "../components/NavBar";
import stats from "../data/stats.json"; // Ensure this path is correct

interface Player {
  name: string;
  goals: number;
  assists: number;
  appearances: number;
  motm?: number; // Optional if you have MOTM stats
}

const StatsPage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    // ✅ Set the imported data directly instead of using fetch
    setPlayers(stats.players);
  }, []);

  // Sort players by goals, assists, and MOTM (if available)
  const topScorers = [...players].sort((a, b) => b.goals - a.goals).slice(0, 5);
  const topAssisters = [...players]
    .sort((a, b) => b.assists - a.assists)
    .slice(0, 5);
  const topMOTM = [...players]
    .filter((p) => p.motm !== undefined)
    .sort((a, b) => (b.motm || 0) - (a.motm || 0))
    .slice(0, 5);

  return (
    <>
      <Navbar />
      <div className="stats-page">
        <h1>Team Stats</h1>

        <div className="stats-container">
          {/* Top Goal Scorers */}
          <div className="stats-box">
            <h2>Top Goal Scorers</h2>
            <ul>
              {topScorers.map((player, index) => (
                <li key={index}>
                  {player.name} - {player.goals} Goals
                </li>
              ))}
            </ul>
          </div>

          {/* Top Assisters */}
          <div className="stats-box">
            <h2>Top Assisters</h2>
            <ul>
              {topAssisters.map((player, index) => (
                <li key={index}>
                  {player.name} - {player.assists} Assists
                </li>
              ))}
            </ul>
          </div>

          {/* Most MOTM Awards (if available) */}
          {topMOTM.length > 0 && (
            <div className="stats-box">
              <h2>Most Man of the Match</h2>
              <ul>
                {topMOTM.map((player, index) => (
                  <li key={index}>
                    {player.name} - {player.motm} MOTM Awards
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StatsPage;

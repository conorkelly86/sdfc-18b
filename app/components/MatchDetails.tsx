import React from "react";
import results from "../data/results.json"; // Assuming this path is correct

interface GoalScorer {
  name: string;
  assist?: string; // Optional assist name
  team: "home" | "away";
  minute: number;
}

interface MatchDetailsProps {
  homeTeam: string;
  awayTeam: string;
  score: string;
  gameWeek: number; // Add gameWeek as a prop
}

const MatchDetails: React.FC<MatchDetailsProps> = ({
  homeTeam,
  awayTeam,
  score,
  gameWeek,
}) => {
  // Filter results based on the provided gameWeek
  const filteredMatches = results.filter(
    (match) => match.gameWeek === gameWeek
  );

  return (
    <div className="match-details">
      <div className="goal-scorers">
        {filteredMatches.length > 0 ? (
          <ul>
            {filteredMatches.map((match, matchIndex) => (
              <div key={matchIndex} className="match">
                <h3 className="match-header">
                  <span className="team-name">{match.homeTeam}</span>{" "}
                  <span className="score">{match.score}</span>{" "}
                  <span className="team-name">{match.awayTeam}</span>
                </h3>
                <ul>
                  {match.goalScorers.map((scorer, scorerIndex) => (
                    <li key={scorerIndex} className="goal-scorer">
                      <span className="scorer-name">⚽ {scorer.name}</span>
                      {scorer.assist && (
                        <span className="assist-name">
                          {" "}
                          🅰️ <em>{scorer.assist}</em>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        ) : (
          <p>No matches found for Game Week {gameWeek}.</p>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;

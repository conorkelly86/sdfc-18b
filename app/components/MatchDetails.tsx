import React from "react";
import results from "../data/results.json"; // Assuming this path is correct

interface MatchDetailsProps {
  homeTeam: string;
  awayTeam: string;
  score: string;
  gameWeek: number; // Add gameWeek as a prop
}

const MatchDetails: React.FC<MatchDetailsProps> = ({ gameWeek }) => {
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
                    <li key={scorerIndex} className="timeline-event">
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <div className="timeline-scorer">
                          <span role="img" aria-label="goal">
                            ⚽
                          </span>{" "}
                          <strong>{scorer.name}</strong>
                        </div>
                        <div className="timeline-assist">
                          {scorer.assist &&
                          scorer.assist !== "none" &&
                          scorer.assist !== "" ? (
                            <>
                              <span role="img" aria-label="assist">
                                🅰️
                              </span>{" "}
                              <span>{scorer.assist}</span>
                            </>
                          ) : (
                            <span className="no-assist">No Assist</span>
                          )}
                        </div>
                      </div>
                      {scorerIndex !== match.goalScorers.length - 1 && (
                        <div className="timeline-connector" />
                      )}
                    </li>
                  ))}
                  <h3 className="motm-highlight">
                    <span role="img" aria-label="star">
                      ⭐
                    </span>{" "}
                    <strong>Man Of The Match:</strong> {match.motm}
                  </h3>
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

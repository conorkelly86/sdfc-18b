"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import stats from "./data/stats.json"; // Adjust the path if needed
import { Score } from "@mui/icons-material";
import MatchDetails from "./components/MatchDetails";
import Navbar from "./components/NavBar";

interface Player {
  name: string;
  goals: number;
  assists: number;
  appearances: number;
}

const Page = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPlayers(stats.players);
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Navbar />

      <Container>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          U18B Season Stats
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell>Goals</TableCell>
              <TableCell>Assists</TableCell>
              <TableCell>Appearances</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.name}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.goals}</TableCell>
                <TableCell>{player.assists}</TableCell>
                <TableCell>{player.appearances}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default Page; // Default export

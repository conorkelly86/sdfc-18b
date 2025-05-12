"use client";

import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import stats from "./data/stats.json"; // Adjust the path if needed
import "./styles/styles.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Player {
  name: string;
  goals: number;
  assists: number;
  appearances: number;
}

type SortField = "goals" | "assists" | "appearances" | "name";
type SortDirection = "asc" | "desc";

const Page = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<SortField>("goals");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  useEffect(() => {
    setPlayers(stats.players);
    setLoading(false);
  }, []);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      // Toggle direction if clicking the same field
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set new field and default to descending
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedPlayers = [...players].sort((a, b) => {
    const multiplier = sortDirection === "asc" ? 1 : -1;
    if (sortField === "name") {
      return multiplier * a.name.localeCompare(b.name);
    }
    return multiplier * (a[sortField] - b[sortField]);
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (field !== sortField) return null;
    return sortDirection === "asc" ? (
      <ArrowUpwardIcon />
    ) : (
      <ArrowDownwardIcon />
    );
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #50c6dd 0%, #38c4e9 100%)",
        }}
      >
        <CircularProgress sx={{ color: "#213466" }} />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <div className="stats-page">
        <Typography
          variant="h4"
          sx={{
            color: "#213466",
            fontSize: "2.5em",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            fontWeight: 600,
          }}
        >
          U18B Season Stats
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            animation: "fadeInUp 0.5s ease-out forwards",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  onClick={() => handleSort("name")}
                  sx={{
                    background: "#213466",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1.1em",
                    borderBottom: "2px solid #38c4e9",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": {
                      background: "#1a2a52",
                    },
                    width: "40%",
                    position: "relative",
                    paddingRight: "32px", // Space for the sort icon
                  }}
                >
                  Player
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <SortIcon field="name" />
                  </Box>
                </TableCell>
                <TableCell
                  onClick={() => handleSort("goals")}
                  sx={{
                    background: "#213466",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1.1em",
                    borderBottom: "2px solid #38c4e9",
                    textAlign: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": {
                      background: "#1a2a52",
                    },
                    width: "20%",
                    position: "relative",
                    paddingRight: "32px", // Space for the sort icon
                  }}
                >
                  Goals
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <SortIcon field="goals" />
                  </Box>
                </TableCell>
                <TableCell
                  onClick={() => handleSort("assists")}
                  sx={{
                    background: "#213466",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1.1em",
                    borderBottom: "2px solid #38c4e9",
                    textAlign: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": {
                      background: "#1a2a52",
                    },
                    width: "20%",
                    position: "relative",
                    paddingRight: "32px", // Space for the sort icon
                  }}
                >
                  Assists
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <SortIcon field="assists" />
                  </Box>
                </TableCell>
                <TableCell
                  onClick={() => handleSort("appearances")}
                  sx={{
                    background: "#213466",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1.1em",
                    borderBottom: "2px solid #38c4e9",
                    textAlign: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": {
                      background: "#1a2a52",
                    },
                    width: "20%",
                    position: "relative",
                    paddingRight: "32px", // Space for the sort icon
                  }}
                >
                  Appearances
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <SortIcon field="appearances" />
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedPlayers.map((player, index) => (
                <TableRow
                  key={player.name}
                  sx={{
                    "&:nth-of-type(odd)": {
                      background: "rgba(56, 196, 233, 0.05)",
                    },
                    "&:hover": {
                      background: "rgba(56, 196, 233, 0.1)",
                    },
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <TableCell
                    sx={{
                      fontWeight: index === 0 ? 500 : 400,
                      color: "#213466",
                      borderBottom: "1px solid rgba(56, 196, 233, 0.2)",
                      width: "40%",
                    }}
                  >
                    {player.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#213466",
                      borderBottom: "1px solid rgba(56, 196, 233, 0.2)",
                      width: "20%",
                    }}
                  >
                    {player.goals}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#213466",
                      borderBottom: "1px solid rgba(56, 196, 233, 0.2)",
                      width: "20%",
                    }}
                  >
                    {player.assists}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#213466",
                      borderBottom: "1px solid rgba(56, 196, 233, 0.2)",
                      width: "20%",
                    }}
                  >
                    {player.appearances}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Page; // Default export

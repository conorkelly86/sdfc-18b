// pages/index.tsx
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Salthill Devon U18B
      </Typography>

      <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
        <Link href="/stats" style={{ textDecoration: "none", color: "white" }}>
          View Season Stats
        </Link>
      </Button>
      <Button variant="contained" color="secondary">
        <Link
          href="/matches/renmore"
          style={{ textDecoration: "none", color: "white" }}
        >
          View Renmore Match
        </Link>
      </Button>
    </Container>
  );
};

export default Home; // Default export

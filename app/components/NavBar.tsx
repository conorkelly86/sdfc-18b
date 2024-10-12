import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Salthill Devon U18B
        </Typography>
        <Button>
          <Link href="/" style={{ color: "#fff" }}>
            Season Stats
          </Link>
        </Button>
        <Button>
          <Link href="/results" style={{ color: "#fff" }}>
            Results
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

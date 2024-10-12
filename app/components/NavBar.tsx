import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Salthill Devon U18B
        </Typography>
        <Button color="inherit">
          <Link href="/">Season Stats</Link>
        </Button>
        <Button color="inherit">
          <Link href="/results">Results</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#213466",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            padding: "8px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "50px",
                height: "50px",
                flexShrink: 0,
              }}
            >
              <Image
                src="/Salthill_Devon_FC_logo.png"
                alt="Salthill Devon FC Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
                priority
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1rem", sm: "1.25rem" },
                display: { xs: "none", sm: "block" },
              }}
            >
              Salthill Devon U18B
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              href="/"
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "6px 16px",
                borderRadius: "8px",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Season Stats
            </Button>
            <Button
              component={Link}
              href="/results"
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "6px 16px",
                borderRadius: "8px",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Results
            </Button>
            <Button
              component={Link}
              href="/stats"
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "6px 16px",
                borderRadius: "8px",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Top Players
            </Button>
            <Button
              component={Link}
              href="/media"
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "6px 16px",
                borderRadius: "8px",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Media
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

"use client";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const navLinks = [
  { label: "Season Stats", href: "/" },
  { label: "Results", href: "/results" },
  { label: "Top Players", href: "/stats" },
  { label: "Media", href: "/media" },
];

const Logo = () => (
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
      <Link href="/">
        <Image
          src="/Salthill_Devon_FC_logo.png"
          alt="Salthill Devon FC Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Link>
    </Box>
    <Typography
      variant="h6"
      component={Link}
      href="/"
      sx={{
        fontWeight: 600,
        fontSize: { xs: "1rem", sm: "1.25rem" },
        display: { xs: "none", sm: "block" },
        color: "white",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      Salthill Devon U18B
    </Typography>
  </Box>
);

const DesktopNav = () => (
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      gap: 1,
      alignItems: "center",
    }}
  >
    {navLinks.map((link) => (
      <Button
        key={link.href}
        component={Link}
        href={link.href}
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
        {link.label}
      </Button>
    ))}
  </Box>
);

interface MobileNavProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ drawerOpen, setDrawerOpen }: MobileNavProps) => (
  <Box sx={{ display: { xs: "flex", md: "none" } }}>
    <IconButton
      color="inherit"
      edge="end"
      onClick={() => setDrawerOpen(true)}
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton>
    <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <Box
        sx={{ width: 220 }}
        role="presentation"
        onClick={() => setDrawerOpen(false)}
        onKeyDown={() => setDrawerOpen(false)}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton component={Link} href={link.href}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  </Box>
);

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
          <Logo />
          <DesktopNav />
          <MobileNav drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

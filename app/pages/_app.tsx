// pages/_app.tsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme"; // Adjust this path as necessary
import { AppProps } from "next/app";
import Navbar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} /> {/* Render the correct page */}
    </ThemeProvider>
  );
}

export default MyApp;

import React from "react";
import Image from "next/image";
import Navbar from "../components/NavBar";
import { Typography } from "@mui/material";
import "../styles/styles.css";

const mediaFiles = [
  // Images
  "Salthill Devon v Bearna na Forbacha 1.JPG",
  "Salthill Devon v Bearna na Forbacha 2.JPG",
  "Salthill Devon v Bearna na Forbacha 3.JPG",
  "Salthill Devon v Bearna na Forbacha 4.JPG",
  "Salthill Devon v Bearna na Forbacha 5.JPG",
  "Salthill Devon v Bearna na Forbacha 6.JPG",
  "Salthill Devon v Bearna na Forbacha 7.JPG",
  "Salthill Devon v Bearna na Forbacha 8.JPG",
  "Salthill Devon v Bearna na Forbacha 9.JPG",
  "Salthill Devon v Bearna na Forbacha 10.JPG",
  "Salthill Devon v Bearna na Forbacha 11.JPG",
  "Salthill Devon v Bearna na Forbacha 12.JPG",
  "Salthill Devon v Bearna na Forbacha 13.JPG",
  "Salthill Devon v Bearna na Forbacha 14.JPG",
  "cup-final.jpeg",
  "vGort.jpg",
  "team01.jpg",
  "vBearnaHome.jpg",
  "vAthenry.jpg",
  "vBearna.jpg",
  // Videos
  "KyleGoal.mp4",
  "PaddyGoal.mp4",
  "MichaelGoal.mp4",
  "ConorGoal.mp4",
  "LukeGoal.mp4",
  "prematch-cup-final2.mp4",
  "prematch-cup-final.mp4",
];

const imageExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];
const videoExtensions = [".mp4", ".mov", ".webm"];

const images = mediaFiles.filter((file) =>
  imageExtensions.some((ext) => file.endsWith(ext))
);
const videos = mediaFiles.filter((file) =>
  videoExtensions.some((ext) => file.endsWith(ext))
);

const MediaPage = () => {
  return (
    <>
      <Navbar />
      <div className="stats-page" style={{ minHeight: "100vh" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#213466",
            fontSize: "2.5em",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Media Gallery
        </Typography>
        <Typography
          variant="h5"
          sx={{
            margin: "30px 0 16px 0",
            color: "#213466",
            fontWeight: 600,
            fontSize: "1.4em",
            borderBottom: "2px solid #38c4e9",
            display: "inline-block",
            textAlign: "center",
            width: "100%",
          }}
        >
          Images
        </Typography>
        <div className="media-gallery-grid">
          {[...images].reverse().map((img) => (
            <a
              key={img}
              href={`/media/${img}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(56,196,233,0.08)",
                display: "block",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
              }}
            >
              <Image
                src={`/media/${img}`}
                alt={img}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 600px) 100vw, 20vw"
                priority={false}
              />
            </a>
          ))}
        </div>
        <Typography
          variant="h5"
          sx={{
            margin: "30px 0 16px 0",
            color: "#213466",
            fontWeight: 600,
            fontSize: "1.4em",
            borderBottom: "2px solid #38c4e9",
            display: "inline-block",
            textAlign: "center",
            width: "100%",
          }}
        >
          Videos
        </Typography>
        <div className="media-video-grid">
          {[...videos].reverse().map((vid) => (
            <div
              key={vid}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                background: "#000",
                boxShadow: "0 2px 12px rgba(56,196,233,0.10)",
                width: "100%",
                aspectRatio: "16/9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <video
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  background: "#000",
                }}
              >
                <source src={`/media/${vid}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MediaPage;

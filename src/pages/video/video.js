import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import "./video.scss";

function Video() {
  const trailer =
    "https://imdb-video.media-imdb.com/vi2535636505/1434659607842-pgv4ql-1591974821002.mp4?Expires=1662231687&Signature=TCbvIu7wgjN3Yl6oxNQVS2bjIvP~f4MvPh2eBPCysU6CF-b7e7ZGQeBGQdDSsrDzbjmkC8EsoMZopJqCBSY6N3-JwIwGGrr1Fj9dYSRBmFJehLqVXPJNwtaBaIaaLR3KQ1WGJReoxkORhUwwXSL2w-xh6lum2GwKr2UGaWvfaEQbCghFa06IeFMLMqCXmr539e3nfQzOR5VcJsFf0kdcrFpNyykU4-mfhYc2K7VgJdKp-uLMB0IDWVmrRsNMmVD~O-ahMKui~ZiGLKNU5D5izJem1H-DEKLmBtFrsSexuPGfYAhC8sfHzNblbp7HPORhnURbM8p6sjZ1wHTiJsZ19w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";

  return (
    <div className="video-container">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay muted progress controls src={trailer} />
    </div>
  );
}

export default Video;

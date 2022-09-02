import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./cards.scss";

function Cards() {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://imdb-video.media-imdb.com/vi2535636505/1434659607842-pgv4ql-1591974821002.mp4?Expires=1662231687&Signature=TCbvIu7wgjN3Yl6oxNQVS2bjIvP~f4MvPh2eBPCysU6CF-b7e7ZGQeBGQdDSsrDzbjmkC8EsoMZopJqCBSY6N3-JwIwGGrr1Fj9dYSRBmFJehLqVXPJNwtaBaIaaLR3KQ1WGJReoxkORhUwwXSL2w-xh6lum2GwKr2UGaWvfaEQbCghFa06IeFMLMqCXmr539e3nfQzOR5VcJsFf0kdcrFpNyykU4-mfhYc2K7VgJdKp-uLMB0IDWVmrRsNMmVD~O-ahMKui~ZiGLKNU5D5izJem1H-DEKLmBtFrsSexuPGfYAhC8sfHzNblbp7HPORhnURbM8p6sjZ1wHTiJsZ19w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";
  return (
    <div
      className="cards"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjm8dyF1K1HAF3-QVlevIb6EZLlROcXx_1yg&usqp=CAU"
        alt="series"
      />
      {isHovered && <video className="trailer" src={trailer} autoPlay loop />}
      {/* <div className="item-info">
        <div className="icon">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="item-info-top">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores
          aut laborum, provident nesciunt, repellendus nemo eius beatae quidem
          blanditiis porro alias iste. Iusto laborum, illum totam quisquam
          obcaecati quia!
        </div>
        <div className="genre">Action</div>
      </div> */}
    </div>
  );
}

export default Cards;

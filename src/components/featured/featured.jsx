import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import "./featured.scss";

function Featured() {
  return (
    <div className="featured">
      <img
        className="featured-movie"
        src="https://images.alphacoders.com/986/986566.jpg"
        alt="profile"
      />
      <div className="info">
        <div className="featured-type">
          <img
            className="netflix-logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"
            alt="logo"
          />
          <p>MOVIES</p>
        </div>
        <h1 className="movie-title">InterStellar</h1>
        <div className="movie-options">
          <button>
            <PlayArrow /> Play
          </button>
          <button>
            <InfoOutlined /> Info
          </button>
        </div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          ducimus eaque fugiat enim vitae ipsa illum laboriosam in tempora quia
          quasi blanditiis est sunt voluptas repudiandae magni, natus iste
          consectetur!
        </p>
      </div>
    </div>
  );
}

export default Featured;

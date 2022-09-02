import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import Featured from "../../components/featured/featured";
import List from "../../components/list/list";
import Navbar from "../../components/navbar/navbar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
    </div>
  );
}

export default Home;

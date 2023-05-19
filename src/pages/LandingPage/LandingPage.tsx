import React, { useState } from "react";
import "./LandingPage.scss";
import "@rainbow-me/rainbowkit/styles.css";

import background1 from "../../assetsDino/landingAssets/background1.png";
import background2 from "../../assetsDino/landingAssets/background2.png";
import background3 from "../../assetsDino/landingAssets/background3.png";
import background4 from "../../assetsDino/landingAssets/background4.png";
import backgroundStatic from "../../assetsDino/landingAssets/backgroundStatic.png";
import rock1 from "../../assetsDino/landingAssets/rock1.png";
import rock2 from "../../assetsDino/landingAssets/rock2.png";
import rock3 from "../../assetsDino/landingAssets/rock3.png";
import tree from "../../assetsDino/landingAssets/tree.png";
import fog1 from "../../assetsDino/landingAssets/fog1.png";
import dinoFrame from "../../assetsDino/landingAssets/dinoFrame.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function LandingPage() {
  const parallax_el = document.querySelectorAll(".parallax");
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  const parallaxCalculations = (e: any) => {
    setXValue(e.clientX - window.innerWidth / 2);
    setYValue(e.clientY - window.innerHeight / 2);

    parallax_el.forEach((el: any) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      let speedz = el.dataset.speedz;
      let zValue = e.clientX - parseFloat(getComputedStyle(el).left);
      let isInLeft =
        parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
      el.style.transform = `translateX(calc(-50% + ${
        -xValue * speedx
      }px)) translateY(calc(-50% + ${
        yValue * speedy
      }px)) perspective(2048px) translateZ(${zValue * isInLeft * speedz}px)`;
    });
  };

  React.useEffect(() => {
    function handleMouseMove(e: any) {
      parallaxCalculations(e);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 22,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#1a2a34",
    borderColor: "#1a2a34",
    fontFamily: [
      "Balsamiq Sans, cursive",
    ].join(","),
    "&:hover": {
      transition: "0s",
      backgroundColor: "#1b303d",
      borderColor: "#1b303d",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#1a2a34",
      borderColor: "#1a2a34",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <>
      <main className="main">
        <img
          src={background2}
          className="parallax bg-img"
          data-speedx="0"
          data-speedy="0"
          data-speedz="0"
        />
        <img
          src={background3}
          className="parallax bg-img"
          data-speedx="0.03"
          data-speedy="0.02"
          data-speedz="0"
        />
        <img
          src={background1}
          className="parallax bg-img"
          data-speedx="0"
          data-speedy="0"
          data-speedz="0"
        />
        <img src={background4} className="bg-img" />
        <img src={backgroundStatic} className="bg-static" />
        <img
          src={rock1}
          className="parallax rock1"
          data-speedx="0.01"
          data-speedy="0.009"
          data-speedz="0.09"
        />
        <img
          src={rock2}
          className="parallax rock2"
          data-speedx="0.01"
          data-speedy="0.009"
          data-speedz="0.09"
        />
        <img
          src={rock3}
          className="parallax rock3"
          data-speedx="0.01"
          data-speedy="0.009"
          data-speedz="0.09"
        />
        <img
          src={tree}
          className="parallax tree"
          data-speedx="0.01"
          data-speedy="0.009"
          data-speedz="0.09"
        />
        <img
          src={fog1}
          className="parallax fog1"
          data-speedx="0.05"
          data-speedy="0.05"
          data-speedz="0"
        />
        <img src={dinoFrame} className="dinoFrame" />
        <BootstrapButton className="landingPage_button" variant="contained">
          Leaderboards
        </BootstrapButton>
      </main>
    </>
  );
}

export default LandingPage;

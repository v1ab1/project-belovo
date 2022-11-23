import { useState, useRef } from "react";
import img from "./bg.jpg";
import borderTop from "./media/borderTop.png";
import borderRight from "./media/borderRight.png";
import borderBottom from "./media/borderBottom.png";
import borderLeft from "./media/borderLeft.png";
import v1 from "./videos/1.mp4";
import v1timer from "./videos/1.timer.mp4";
import v2left from "./videos/2.left.mp4";
import v2middle from "./videos/2.middle.mp4";
import v2right from "./videos/2.right.mp4";
import v2timer from "./videos/2.timer.mp4";
import v3left from "./videos/3.left.mp4";
import v3middle from "./videos/3.middle.mp4";
import v3right from "./videos/3.right.mp4";
import v3timer from "./videos/3.timer.mp4";
import v4middle from "./videos/4.middle.mp4";

export const Page11 = () => {
  const [condition, setCondition] = useState(0);
  const [back, setBack] = useState(1);
  const [immunity, setImmunity] = useState(false);
  const [ability, setAbility] = useState(true);
  const videos =  [v1, v1timer, v2left, v2middle, v2right, v2timer, v3left, v3middle, v3right, v3timer, v4middle];
  const video1ref = useRef(null);
  const video2ref = useRef(null);
  const handlePlayVideo = () => {
    if (condition !== 0) {
      return;
    }
    video1ref.current.play();
  };
  const logic = () => {
    if (condition === 0 && !immunity) {
      setBack(1);
      setTimeout(() => setCondition(1), 600);
      setTimeout(() => setAbility(false),12200);
      setTimeout(() => setAbility(true),15000);
      setTimeout(() => setBack(0), 1000);
      video1ref.current.autoplay = true;
    }
    if (condition === 1 && !immunity) {
      setCondition(0);
      video1ref.current.autoplay = false;
    }
    if (condition === 3 || condition === 4) {
      video1ref.current.autoplay = false;
      setCondition(0);
      setImmunity(false);
      setTimeout(() => setBack(1), 2010);
    }
    if (condition === 2) {
      setBack(5);
      setTimeout(() => setCondition(5), 600);
      setTimeout(() => setAbility(false),11860);
      setTimeout(() => setAbility(true),15000);
    }
    if (condition === 5) {
      video1ref.current.autoplay = false;
      setBack(0);
      setTimeout(() => setCondition(0), 600);
      setTimeout(() => setImmunity(false), 600);
    }
    if (condition === 6 || condition === 8) {
      video1ref.current.autoplay = false;
      setBack(0);
      setTimeout(() => setCondition(0), 600);
      setImmunity(false);
      setTimeout(() => setBack(1), 1210);
    }
    if (condition === 7) {
      setBack(9);
      setTimeout(() => setAbility(false),11770);
      setTimeout(() => setAbility(true),15000);
      setTimeout(() => setCondition(9), 600);
      setTimeout(() => setImmunity(false), 600);
    }
    if (condition === 9 || condition === 10) {
      video1ref.current.autoplay = false;
      setBack(0);
      setTimeout(() => setCondition(0), 600);
      setTimeout(() => setImmunity(false), 600);
    }
  };
  const btn = (a) => {
    if (condition === 9 && a === "middle") {
      setBack(10);
      setTimeout(() => setCondition(10), 600);
      return;
    }
    if (condition !== 1 && condition !== 5) {
      return;
    }
    if (a === "left" && ability) {
      setImmunity(true);
      condition === 1 ? setBack(2) : setBack(6);
      setTimeout(() => setCondition(condition + 1), 600);
    }
    if (a === "middle" && ability) {
      setImmunity(true);
      condition === 1 ? setBack(2) : setBack(6);
      setTimeout(() => setCondition(condition + 2), 600);
    }
    if (a === "right" && ability) {
      setImmunity(true);
      condition === 1 ? setBack(2) : setBack(6);
      setTimeout(() => setCondition(condition + 3), 600);
      setTimeout(() => setBack(0), 2010);
    }
  };
  
  return (
  <div style={{overflow: "hidden"}}>
    <video
      onEnded={() => logic()}
      src={videos[condition]}
      style={styles.video}
      ref={video1ref}
      onClick={() => handlePlayVideo()}
    /> 
    <video
      src={videos[back]}
      style={{...styles.video, zIndex: 3}}
      ref={video2ref}
      muted
    />
    <img src={borderTop} style={styles.borderTop} alt="" />
    <img src={borderRight} style={styles.borderRight} alt="" />
    <img src={borderBottom} style={styles.borderBottom} alt="" />
    <img src={borderLeft} style={styles.borderLeft} alt="" />
    <div onClick={() => btn("left")} style={styles.left}></div>
    <div onClick={() => btn("middle")} style={styles.middle}></div>
    <div onClick={() => btn("right")} style={styles.right}></div>
    <img src={img} style={{height: "1920px", position: "absolute", left: 0}} alt=""/> 
  </div>
)};



const styles = {
  borderTop: {
    position: "absolute",
    top: 229,
    right: 55,
    zIndex: 200
  },
  borderRight: {
    position: "absolute",
    top: 229,
    right: 43,
    zIndex: 200
  },
  borderBottom: {
    position: "absolute",
    bottom: 62,
    right: 51,
    zIndex: 200
  },
  borderLeft: {
    position: "absolute",
    bottom: 66,
    left: 1133,
    zIndex: 200
  },
  start: {
    position: "absolute",
    top: 250,
    right: 90,
    zIndex: 1,
    opacity: 0.6
  },
  video: {
    position: "absolute",
    zIndex: 4,
    width: 900,
    height: 1570,
    top: 250,
    right: 90
  },
  func: {
    position: "absolute",
    top: 250,
    right: 90,
    zIndex: 3,
    width: 900,
    height: 1570
  },
  left: {
    position: "absolute",
    top: 1399,
    left: 1227,
    width: 223,
    height: 86,
    zIndex: 200
  },
  middle: {
    position: "absolute",
    top: 1281,
    left: 1309,
    width: 223,
    height: 86,
    zIndex: 200
  },
  right: {
    position: "absolute",
    top: 1513,
    left: 1304,
    width: 223,
    height: 86,
    zIndex: 200
  }
}
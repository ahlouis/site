import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";
import Cube from "./Cube"; // Import the Cube component

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, i'm "}
            <span className="intro-name">{"aron"}</span>
            
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I build stuff.</div>
          <div className="intro-desc">
            I'm a computer science student from Charlotte, North Carolina. I'm fascinated by
            large-scale, high-impact products and the future devleopment of innovating software and robotics with AI.
          </div>
          <a
            href="mailto:herbaal@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;

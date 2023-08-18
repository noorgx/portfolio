import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, fellow enthusiasts! I go by the name of <span className="purple">Noor Ossama</span>,
            and I call the vibrant city of <span className="purple">Cairo, Egypt</span> my home.
            <br /> I'm not just your average software developer; I am a dedicated bug hunter, web pentester, and hacker extraordinaire who thrives on the thrill of solving complex challenges.
            <br />
            Currently, my playground extends from the intricate world of CTFs (Capture The Flag) to hunting down vulnerabilities, all while skillfully navigating the realm of web security.
            <br />
            When I'm not immersed in lines of code, you'll find me passionately engaged in unraveling problems and uncovering hidden pathways.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Play CTFS
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Anime :)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The quieter you become the more you can hear"{" "}
          </p>
          <footer className="blockquote-footer">Noor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

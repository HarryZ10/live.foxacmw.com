import React from "react";
import resources from "./content.json";
import discordIcon from "../svg/discord.svg";
import devpostIcon from "../svg/devpost.svg";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div id="resources" className="section">
      <a href="#" rel="noopener noreferrer" target="_blank">
        <div className="resource-1">
          <img src={discordIcon} alt="discord icon" className="resource-icon" />
          Discord
        </div>
      </a>
      <a href="https://foxacmw.devpost.com" rel="noopener noreferrer" target="_blank">
        <div className="resource-2">
          <img src={devpostIcon} alt="dev post icon" className="resource-icon" />
          Devpost
        </div>
      </a>
    </div>
  );
}

export default Resources;

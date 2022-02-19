import React from "react";
import discordIcon from "../svg/discord.svg";
import devpostIcon from "../svg/devpost.svg";

function Resources() {
  return (
    <div id="resources" className="section">
      {/* Uncomment when going live */}
      {/* <a href="https://discord.gg/ScUsTqchMf"> */}
      <a>
        <div className="resource-1 disabled">
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

import React from "react";
import discordIcon from "../svg/discord.svg";
import devpostIcon from "../svg/devpost.svg";
import formsIcon from "../svg/forms.svg";

function Resources() {
  return (
    <div id="resources" className="section">
      {/* Uncomment when going live */}
      <a href="https://discord.gg/ScUsTqchMf">
      {/* <a> */}
        <div className="resource-1">
          <img src={discordIcon} alt="discord icon" className="resource-icon" />
          Discord
        </div>
      </a>
      <a href="https://foxacmw.devpost.com" rel="noopener noreferrer" target="_blank">
        <div className="resource-2">
          <img src={devpostIcon} alt="devpost icon" className="resource-icon" />
          Devpost
        </div>
      </a>
      <a href="https://forms.gle/i7LdZwAkzMaysJ7H7" rel="noopener noreferrer" target="_blank">
        <div className="resource-3">
          <img src={formsIcon} alt="forms icon" className="resource-icon" />
          Teams Check-In Form <small style={{ fontSize: '0.8rem'}}>(Due April 2nd)</small>
        </div>
      </a>
    </div>
  );
}

export default Resources;

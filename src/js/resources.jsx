import React from "react";
import discordIcon from "../svg/discord.svg";
import devpostIcon from "../svg/devpost.svg";
// import formsIcon from "../svg/forms.svg";
import driveIcon from "../svg/drive.svg";
import googleDriveIcon from "../svg/googleDriveIcon.svg";
import prizeIcon from "../svg/prizes.svg";


function Resources() {
  return (
    <div id="resources" className="section">
      {/* Uncomment when going live */}
      <a href="https://discord.com/invite/ecA3TbZ4Tf">
        <div className="resource-1">
          <img src={discordIcon} alt="discord icon" className="resource-icon" />
          Discord
        </div>
      </a>
      <a href="https://github.com/FoxHacks">
        <div className="resource-2">
          <img src={driveIcon} alt="github icon" className="resource-icon" />
          APIs
        </div>
      </a>
      <a className="disabled">
        <div className="resource-3">
          <img src={prizeIcon} alt="prize icon" className="resource-icon" />
          Prizes
        </div>
      </a>
      <a href="https://codejam-2023.devpost.com/" rel="noopener noreferrer" target="_blank">
        <div className="resource-4">
          <img src={devpostIcon} alt="devpost icon" className="resource-icon" />
          Devpost
        </div>
      </a>
      <a href="https://docs.google.com/document/d/1p8K-qspeRimIpWpBJCUZK2K99VAIv80cXCJQa3wVAHM/edit" rel="noopener noreferrer" target="_blank">
        <div className="resource-5">
          <img src={googleDriveIcon} alt="google drive icon" className="resource-icon" />
          Guidelines
        </div>
      </a>
      <a href="mailto:acm.gfu@gmail.com" rel="noopener noreferrer" target="_blank">
        <div className="resource-6">
          <img src={driveIcon} alt="devpost icon" className="resource-icon" />
          <span>
            Report
          </span>
        </div>
      </a>
      {/* <a href="https://forms.gle/i7LdZwAkzMaysJ7H7" rel="noopener noreferrer" target="_blank">
        <div className="resource-3">
          <img src={formsIcon} alt="forms icon" className="resource-icon" />
          Teams Check-In Form <small style={{ fontSize: '0.8rem'}}>(Due April 2nd)</small>
        </div>
      </a> */}
    </div>
  );
}

export default Resources;

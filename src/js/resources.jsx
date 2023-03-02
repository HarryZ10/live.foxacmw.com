import React from "react";
import discordIcon from "../svg/discord.svg";
import devpostIcon from "../svg/devpost.svg";
// import formsIcon from "../svg/forms.svg";
import driveIcon from "../svg/drive.svg";
import googleDriveIcon from "../svg/googleDriveIcon.svg";


function Resources() {
  return (
    <div id="resources" className="section">
      {/* Uncomment when going live */}
      <a href="https://discord.gg/ScUsTqchMf">
        <div className="resource-1">
          <img src={discordIcon} alt="discord icon" className="resource-icon" />
          <br/>
          Discord
        </div>
      </a>
      <a href="https://github.com/FoxHacks">
        <div className="resource-2">
          <img src={driveIcon} alt="github icon" className="resource-icon" />
          <br/>
          APIs & Resources
        </div>
      </a>
      <a href="https://codejam-2023.devpost.com/" rel="noopener noreferrer" target="_blank">
        <div className="resource-3">
          <img src={devpostIcon} alt="devpost icon" className="resource-icon" />
          <br/>
          Devpost
        </div>
      </a>
      <a href="https://docs.google.com/document/d/1p8K-qspeRimIpWpBJCUZK2K99VAIv80cXCJQa3wVAHM/edit" rel="noopener noreferrer" target="_blank">
        <div className="resource-4">
          <img src={googleDriveIcon} alt="google drive icon" className="resource-icon" />
          <br/>
          Presentations
        </div>
      </a>
      {/* <a href="mailto:acm.gfu@gmail.com" rel="noopener noreferrer" target="_blank">
        <div className="resource-3">
          <img src={googleDriveIcon} alt="devpost icon" className="resource-icon" />
          Submit Presentation
        </div>
      </a> */}
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

import React from 'react';
import * as whiteLeavesLogo from '../svg/whiteLeavesLogo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FaExternalLinkAlt } from "react-icons/fa";
// import Timer from './timer.jsx';

function Header() {
  return(
    <nav id="header">
      <ul className="container" style={{background: '#fed13e'}}>
        <li id="header-logo">
          <a href="/">
            <img src={whiteLeavesLogo} alt="code jam small logo"/>
            <span className="logo-text-code">code</span>
            <span className="logo-text-jam">jam</span>
            <span className="logo-text-live">live</span>
          </a>
        </li>
        <SocialMedia />
      </ul>
    </nav>
  );
}

function SocialMedia() {
  return(
    <div id="social-media">
      <a style={{background: 'white'}} href="https://www.instagram.com/acmw.gfu" target="_blank"><FontAwesomeIcon style={{color: '#000'}} icon={faInstagram} /></a>
    </div>
  );
}

export default Header;

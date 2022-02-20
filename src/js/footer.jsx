import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-text">
        <p style={{ marginTop: 20, marginBottom: 20 }}>
          <span className="lead">
            Implemented with <span className="heart">&hearts;</span> from Newberg, OR
          </span>
          <p>
            Made with the React and Node.js frameworks.
          </p>
          <p>
              Copyright &copy; 2022. All rights reserved.
          </p>
        </p>
      </div>
      <br />

    </footer> 
  );
}

export default Footer;
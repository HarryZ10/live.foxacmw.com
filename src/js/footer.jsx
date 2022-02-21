import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-text">
        <p style={{ marginTop: 20, marginBottom: 20 }}>
          <span id="Implement">
            Implemented with <span className="heart">&hearts;</span> from Newberg, OR
          </span>
          <p>
            Made with the React and Node.js frameworks.
          </p>
          <p>
              Copyright &copy; 2022. All rights reserved.
          </p>

          {/* Link to privacy policy */}
          <p style={{ paddingTop: 10}}>
              <a href="/code-of-conduct">Code of Conduct</a>
              <span> | </span> 
              <a href="/privacy-policy">Privacy Policy</a>
          </p>
        </p>
      </div>
    </footer> 
  );
}

export default Footer;
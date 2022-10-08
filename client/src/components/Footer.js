import React from "react";

const styles = {
  footer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    background: "red",
    color: "white",
    "text-align": "center",
  },
  link: {
    "text-decoration": "none",
  },
};

function Footer() {
  return (
    <footer className="text-lg-start" style={styles.footer}>
      <div className="text-center p-3">
        <a
          className="text-dark p-3"
          href="https://github.com/kamarygillespie4"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          Github
        </a>
        <a
          className="text-dark p-3"
          href="https://www.linkedin.com/in/kamary-gillespie/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          linked IN
        </a>
        <a
          className="text-dark p-3"
          href="https://mdbootstrap.com/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          STACK OVERFLOW
        </a>
      </div>
    </footer>
  );
}
export default Footer;

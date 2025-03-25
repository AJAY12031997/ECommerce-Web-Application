import { Send } from "@material-ui/icons";
import styled from "styled-components";
import "./newsletter.css";


const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="title">Newsletter</h1>
      <div className="desc">Get timely updates from your favorite products.</div>
      <div className="inputContainer">
        <input placeholder="Your email" />
        <button className="newsletter-button">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

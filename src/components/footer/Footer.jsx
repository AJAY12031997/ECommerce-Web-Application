import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import "./footer.css";

const SocialIcon=styled.div`
  background-color: #${(props) => props.color}; 
  `;

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <h1>AJAY.</h1>
        <p className="desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="socialContainer">
          <SocialIcon className="socialIcon" color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon className="socialIcon" color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon className="socialIcon" color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon className="socialIcon" color="E60023">
            <Pinterest />
          </SocialIcon>
        </div>
      </div>
      <div className="center">
        <h3 className="footer-title">Useful Links</h3>
        <ul className="list">
          <li className="listItem">Home</li>
          <li className="listItem">Cart</li>
          <li className="listItem">Man Fashion</li>
          <li className="listItem">Woman Fashion</li>
          <li className="listItem">Accessories</li>
          <li className="listItem">My Account</li>
          <li className="listItem">Order Tracking</li>
          <li className="listItem">Wishlist</li>
          <li className="listItem">Wishlist</li>
          <li className="listItem">Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3 className="footer-title">Contact</h3>
        <div className="contactItem">
          <Room style={{ marginRight: "10px" }} /> 622 Street, South NSEZ 98336
        </div>
        <div className="contactItem">
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className="contactItem">
          <MailOutline style={{ marginRight: "10px" }} /> ajay@interrait.com
        </div>
        <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;

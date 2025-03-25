import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { useHistory } from "react-router-dom";
import "./cart.css"

const KEY = process.env.REACT_APP_STRIPE;

const ProductColor = styled.div`
  background-color: ${(props) => props.color};
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history=useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment",{
          tokenId:stripeToken.id,
          amount:cart.total * 100,
        });
        history.push("/success",{data:res.data})
      } catch { }
    };
    stripeToken && makeRequest();
  },[stripeToken,cart.total,history]);
  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrapper">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
          <button>CONTINUE SHOPPING</button>
          <div className="topTexts">
            <span className="topText">Shopping Bag(2)</span>
            <span className="topText">Your Wishlist (0)</span>
          </div >
          <button >CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.products.map((product) => (
              <div className="product">
                <div className="productDetail">
                  <img src={product.img} />
                  <div className="details">
                    <span className="productName">
                      <b>Product:</b> {product.title}
                    </span>
                    <span className="productId">
                      <b>ID:</b>  {product._id}
                    </span>
                    <ProductColor className="productColor" color={product.color} />
                    <span className="productSize">
                      <b>Size:</b> {product.size}
                    </span>
                  </div >
                </div>
                <div className="priceDetail">
                  <div className="productAmountContainer">
                    <Add />
                    <div className="productAmount">{product.quantity}</div>
                    <Remove />
                  </div>
                  <div className="productPrice">     $ {product.price * product.quantity}</div>
                </div>
              </div>
            ))}
            <hr />
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">$ {cart.total}</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping</span>
              <span  className="summaryItemPrice">$ 5.90</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span  className="summaryItemPrice">$ -5.90</span>
            </div>
            <div className="summaryItem" type="total">
              <span className="summaryItemText">Total</span>
              <span  className="summaryItemPrice">$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="Ajay Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total  * 100}
              token={onToken}
              stripeKey={KEY}>
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

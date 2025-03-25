import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import "./product.css"


const Product = ({ item }) => {
  console.log(item.price)
  return (
    <div className="product-container">
      <div className="circle" />
      <img src={item.img} />
      <div className="info">
        {/* <div className="icon">
          <ShoppingCartOutlined />
        </div> */}
        <div className="icon">
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </div>
        {/* <div className="icon">
          <FavoriteBorderOutlined />
        </div> */}
      </div>
    </div>
  );
};

export default Product;

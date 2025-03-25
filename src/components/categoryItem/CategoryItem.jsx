import { Link } from "react-router-dom";
import styled from "styled-components";
import  "./categoryItem.css";


const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem-container">
      <Link to={`/products/${item.cat}`}>
      <img src={item.img} />
      <div className="info">
        <h1 className="title">{item.title}</h1>
        <button>SHOP NOW</button>
      </div>
      </Link>
    </div>
  );
};

export default CategoryItem;

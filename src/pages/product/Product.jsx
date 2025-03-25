import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import { publicRequest } from "../../requestMethods";
import { useEffect, useState } from "react";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import "./product.css"

const FilterColor = styled.div`
 background-color: ${(props) => props.color}; 
`;
const FilterSizeOption = styled.option``;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data);

      } catch { }
    };
    getProduct()
  }, [id]);


  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <div className="page-product-container">
      <Navbar />
      <Announcement />
      <div className="page-product-wrapper">
        <div className="imgContainer">
          <img src={product.img} />
        </div>
        <div className="infoContainer">
          <h1 className="product-title">{product.title}</h1>
          <p className="desc">{product.desc}
          </p>
          <span className="price">$ {product.price}</span>
          <div className="filterContainer">
            <div className="filter">
              <span className="filterTitle">Color</span>
              {product.color?.map((c) => (
                <FilterColor className="filterColor" color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </div>
            <div className="filter">
              <span className="filterTitle">Size</span>
              <select className="filterSize" onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}

              </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="amountContainer">
              <Remove onClick={() => handleQuantity("dec")} />
              <span className="amount">{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button className="page-product-button" onClick={handleClick}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;

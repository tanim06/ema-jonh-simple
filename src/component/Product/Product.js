import React from "react";
import "./product.css";

const Product = (props) => {
  //  console.log(props.product.name);
  const { name, img, seller, price, stock, han } = props.product;
  return (
    <div className="product">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="main-button"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import "./cart.css";
const Cart = (props) => {
  //console.log(props);
  const cart = props.cart;
  // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const prd = cart[i];
    total = total + prd.price;
  }
  let shiping = 0;
  if (total > 15) {
    shiping = 4.99;
  } else if (total > 0) {
    shiping = 12.99;
  }
  const tax = ((total * 10) / 100).toFixed(2);
  const grandTotal = Number((total + shiping + Number(tax)).toFixed(2));
  return (
    <div>
      <h4 className="text-center">Order Samary</h4>
      <p>Items orders: {cart.length}</p>
      <table>
        <tbody>
          <tr>
            <td>Product price </td>
            <td>: {total}</td>
          </tr>
          <tr>
            <td>Shiping cost </td>
            <td>: {shiping}</td>
          </tr>
          <tr>
            <td>Tax + Vat </td>
            <td>: {tax}</td>
          </tr>
          <tr>
            <th>Total price </th>
            <td>: {grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;

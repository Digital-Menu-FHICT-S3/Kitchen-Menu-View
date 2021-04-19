import React from "react";
import "./ShoppingCart.sass";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import Tips from "./Tips/Tips";

const ShoppingCart = ({ products, tipTotal, setTipTotal }) => {
  return (
    <div className="wrapper">
      <Container>
        {products.map((product) => (
          <ShoppingCartItem product={product} />
        ))}
        <div>
          <hr />
          <Row>
            <Col>
              <h4>SubTotal</h4>
            </Col>
            <Col className="price">
              <h4>{getPriceSubSum(products).toFixed(2)}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tips setTipTotal={setTipTotal}></Tips>
            </Col>
            <Col className="price">
              <h4>{tipTotal}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Total</h4>
            </Col>
            <Col className="price">
              <h4>{getPriceSum(products, tipTotal).toFixed(2)}</h4>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ShoppingCart;

function getPriceSum(products, tipTotal) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += parseFloat(products[i].price);
  }
  return total + Number(tipTotal);
}

function getPriceSubSum(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += parseFloat(products[i].price);
  }
  return total;
}

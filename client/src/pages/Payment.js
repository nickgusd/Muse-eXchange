import React from "react";
import Paypal from "../components/PayPal";
import Card from  'react-bootstrap/Card'

const divStyle = {
  width: "55%",
  textAlign: "center",
  fontFamily:"Roboto",
  paddingTop:"4%",
  
  color:"black",
  
};
const cardHeader = {
  fontSize:"30px"
}
const pStyle = {
  fontSize:"18px",
  fontStyle:"italic"
}



function Payment(props) {
  console.log()
  let price = props.match.params.price;
  let title = props.match.params.title;
  return (
    
    <div className="container" style={divStyle} >
      <Card >
  <Card.Header style={cardHeader}>Your total is ${price}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <p > Pay securely by <span style={pStyle} >debit/credit card </span>or <span style={pStyle} >PayPal</span></p>
    <Paypal title={title} price={price}/>
      <footer className="blockquote-footer">
        Thank you for shopping at <cite title="Source Title">Muse Xchange</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    </div>
   
      

      
  );
}

export default Payment;

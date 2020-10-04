import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
function PurchaseBtn(props) {
  const history = useHistory();

console.log(props.currentuser)


  return (
    <div className="Paypal">
      <Button
        onClick={() =>
          history.push(`/pages/Payment/${props.title}/${props.price}/${props.id}/${props.currentuser}`)
        }
      >
        {" "}
        Make Purchase{" "}
      </Button>
    </div>
  );
}


export default PurchaseBtn;

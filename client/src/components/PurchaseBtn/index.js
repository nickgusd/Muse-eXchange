import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
function PurchaseBtn(props) {
  const history = useHistory();

  return (
    <div className="Paypal">
      <Button
        variant="dark"
        onClick={() => history.push(`/pages/Payment/${props.title}/${props.price}/${props.id}`)}
      >
        {" "}
        Make Purchase{" "}
      </Button>
    </div>
  );
}


export default PurchaseBtn;

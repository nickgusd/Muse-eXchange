import React from "react";
import { useHistory } from "react-router-dom";

function PurchaseBtn(props) {
  const history = useHistory();

  return (
    <div className="Paypal">
      <button
        onClick={() =>
          history.push(`/pages/Payment/${props.title}/${props.price}`)
        }
      >
        {" "}
        Make Purchase{" "}
      </button>
    </div>
  );
}


export default PurchaseBtn;

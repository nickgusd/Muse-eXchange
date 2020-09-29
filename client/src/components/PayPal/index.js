import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  
    const paypal = useRef();

    useEffect(() => {
        
            // Configure environment
            
            // Customize button (optional)
            
            
         window.paypal.Buttons({ 
            style: {
                size: 'responsive',
                color: 'black',
                shape: 'rect',
                layout:'vertical'
              },
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "cool stuff",
                amount: {
                  currency_code: "USD",
                  value: 200.00,
                },
                payee: {
                    email_address: "sb-lsm47g3309758@personal.example.com"
                },
              }
            ]
          })
        }, 
        onApprove: async (data, actions) => {
          console.log(actions);
          console.log(data);
          const order = await actions.order.capture();
          console.log(order)
        window.location.replace("/")
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

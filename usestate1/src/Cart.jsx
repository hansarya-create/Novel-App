import React from 'react'

export default function Cart({ cartItems}) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div  style={{
        border: "1px solid #ddd" ,
        borderRadius:   "12px" ,
        padding:  "20px"  ,
        width:  "300px" ,
        backgroundColor: "#fefefe" ,
        boxShadow: "0 4px  10px  rgba(0,0,0,0.1)"
    }}>
        <h2>Cart</h2>
        {cartItems.length  === 0 ? (
            <p>Cart is Empty</p>
        ) : (
            <div>
                {cartItems.map((item,  index) => (
                    <div key={index} style={{ marginBottom:  "10px"}}>
                         <strong>{item.name}</strong> -{item.price}
                    </div>
                ) )}
            <hr  />
            <h3>Total:  {total}</h3>
            </div>
        ) }
      </div>
    
  );
}
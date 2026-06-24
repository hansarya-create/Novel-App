import React from 'react'

export default function Productslist({  items,  addToCart  }) {
  return (
    <div style={{
        display:"flex",
        flexWrap: "wrap" ,
        gap: "20px"
    }}>
        {items.map((item) =>(
            <div key={item.id}
            style={{
                backgroundColor: "#f9f9f9" ,
                border:  "1px solid  #ddd" ,
                borderRadius:  "12px" ,
                padding: "15px",
                width: "180px",
                boxShadow: "0  4px  8px  rgba(0,0,0,0.1)" ,
                textAlign:  "center"

            }}
            >
                <h3>{item.name}</h3>
                <p style = {{color: "green", fontWeight:  "bold"}}>
                    {item.price}
                </p>
                <button onClick={() =>  addToCart(item)}>
                    Add to Cart
                </button>
                </div>
    ))}   
    </div>
  );
}
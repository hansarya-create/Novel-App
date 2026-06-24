import React, {useState} from 'react'

export default function AddProduct() {
    const [product,setProduct] = useState([{id:1, name:"Mobile",price:15000}]);
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const addProduct = () =>{
        const newProduct = {
            id: product.length +1,
            name: name,
            price: price
        }
       setProduct([...product,newProduct]);
        setName("");
        setPrice("");
    }
  return (
    <div>
      <h1>Products Dashboard</h1>
      <input type="text" 
            placeholder='Enter product name'
            value={name}
            onChange={handleNameChange} />
        <input type="number" 
            placeholder='Enter Price '
            value={price}
            onChange={handlePriceChange} />
        <button onClick={addProduct}>Add Product</button>
        {product.map( item => (
            <div key="item.id">
                <ul>
                    <li>PID{item.id} : {item.name} {item.price}</li>
                </ul>
            </div>
        ))}
    </div>
  )
}
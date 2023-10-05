import React, { useEffect, useState } from "react";
import {useParams,useNavigate} from 'react-router-dom';

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params =useParams();
  const navigate=useNavigate()

  useEffect(()=>{
    console.log(params)
    getProductDetails()
  },[])
   
  async function getProductDetails(){
    let result =await fetch(`http://localhost:5000/product/${params.id}`)
      result = await result.json()
      console.log(result)
     setName(result.name);
     setPrice(result.price);
     setCategory(result.category);
     setCompany(result.company);
  }


  const updateProduct=async ()=>{
    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        'Content-Type':"application/json"
      }
    })
    result = await result.json();
    // console.log(result);
    navigate('/')
  }
  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button onClick={updateProduct} className="appbutton">
        UpdateProduct
      </button>
    </div> 
  );
}

export default UpdateProduct;

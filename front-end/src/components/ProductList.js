import React, { useEffect, useState } from 'react'

function ProductList() {
    const [products,setProducts] =useState([])

    useEffect(()=>{
     getProducts();
    },[])

   async function getProducts(){
     let result=await fetch('http://localhost:5000/products')
      result=await result.json()
      setProducts(result)
    }

   async function deleteProduct(id){
        let result= await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        })
        result =await result.json();
        if(result){
            getProducts();
        }
       
       

    }

    return (
        <div className='product-list'>
          <h1>ProductList</h1>
          <ul>
            <li>S.NO</li>
            <li>name</li>
            <li>price</li>
            <li>category</li>
            <li>company</li>
            <li>Operation</li>
          </ul>
          {products.map((product, index) => 
           <ul>
           <li>{index+1}</li>
           <li>{product.name}</li>
           <li>{product.price}</li>
           <li>{product.category}</li>
           <li>{product.company}</li>
           <li><button className='btn' onClick={()=>deleteProduct(product._id)}>Delete</button></li>
           
         </ul>
          )}
        </div>
      );
}

export default ProductList
import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error , setError] =useState(false);

  async function addProduct() {
    if (!name || !price || !category || !company) {
      setError(true)
      return false;
    }

    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"));
    console.log(userId._id);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  }
  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
     {error && !name && <span className="invalid-input"> <h6>Enter valid name</h6> </span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price && <span className="invalid-input"> <h6>Enter valid price</h6> </span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category && <span className="invalid-input"> <h6>Enter valid category</h6> </span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && <span className="invalid-input"> <h6>Enter valid company</h6> </span>}
      <button onClick={addProduct} className="appbutton">
        Add product{" "}
      </button>
    </div>
  );
}

export default AddProduct;

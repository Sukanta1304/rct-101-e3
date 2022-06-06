import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
const Products = () => {
  const [Product, setProduct] = useState([]);
  const showProduct=async()=>{
    let res= await axios.get("http://localhost:8080/products");
    setProduct(res.data)
  }
  useEffect(()=>{
showProduct();
  },[])
  return <div>Products:
    <br />
    {Product.map((product)=>(
      <>
    <div key={product.id}>{product.name}</div>
    <p>{product.description}</p>
    <Link to ={`/products/${product.id}`}>More Details...</Link>
    </>
    ))}
  </div>;
};

export default Products;

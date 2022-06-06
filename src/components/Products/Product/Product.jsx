import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // Note: this id should come from api
  const {id}= useParams();
  const [P, setP] = useState({});
  const product = { id: 1 };
  const getData= async()=>{
    let res= await axios.get(`http://localhost:8080/products/${id}`);
    setP(res.data)
  }
  useEffect(()=>{
if(id){
  getData();

}
  },[id])
  return (
    <div data-cy={`product-${product.id}`}>{P.id}
      <h3 data-cy="product-name">{P.name}</h3>
      <h6 data-cy="product-description">{P.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;

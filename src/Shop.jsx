import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Cart";
import './Shop.css'

const ShopPage = () => {
  const [numOfItems, setNumOfItems] = useState(0);
  const [fetchedData, setFetchedDate] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setFetchedDate(data));
  }, []);

  console.log(fetchedData)

  const handleAddToCart = () => {
    setNumOfItems(numOfItems + 1);
  };
  return (
    <>
      <nav className="shop-nav">
        <h1>ABC Shop</h1>
        <div className="links">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="shop"
                style={{ textDecoration: "none", color: "black" }}
              >
                Shop
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                to="cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                Cart
              </Link>
            </li>
            <li>Number of items: {numOfItems}</li>
          </ul>
        </div>
      </nav>
      <div className="container">
        {fetchedData && (fetchedData.map((product, index) => (
            <Card 
            key={index}
            data={product}
            handleClick={handleAddToCart}
            />
        )))}
      </div>
    </>
  );
};

export default ShopPage;

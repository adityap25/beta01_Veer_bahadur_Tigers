import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    console.log(item)
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/user/register/', {
      wheat : item[0].quantity,
      rice : item[1].quantity,
      milk : item[2].quantity,
      fruits : item[3].quantity,
      pin : '123456'
    }, { withCredentials: false })
      .then(res => {
        console.log(res);
        if (res.data.msg === 'Registration Successful') {
          navigate('/list');
        }
        // console.log(res);
      }
      ).catch(err => {
        console.log(err);
      }
      );
    console.log(item[0].quantity)
    console.log("Working")
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <h3>Donation</h3>
        </div>

        {/* <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div> */}
      </header>

      <section className="main-cart-section">
        <h2>Donation Cart</h2>
        <p className="total-items">
          You have <span className="total-items-count">_({totalItem})_</span> quantity of items
          in donation cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <button onClick={handleSubmit} >Approve Donations</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;

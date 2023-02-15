import React, { useState, useEffect } from 'react'
import style from "./Styles/cart.module.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PayButton from './PayButton';



export const Cart = () => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(0);
  let { token, id } = useSelector((state) => state.AuthReducer)
  const auth = useSelector((state) => state.AuthReducer)
  console.log(id)
  console.log(token)
  const navigate = useNavigate()

  const getCartData = () => {

    fetch("https://vowel-ba6l.onrender.com/cart/get", {
      headers: { "auth": token }
    }).then((res) => res.json())
      .then((res) => {
        console.log(res)
        setCart(res)
      })

  }
  const updateCount = (con, id) => {
    try {

      console.log(con, id)
      fetch(`https://vowel-ba6l.onrender.com/cart/update/${id}?q=${con}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "auth": token
        }
      }).then((res) => res.json())
        .then((res) => setLoading(!loading))



    } catch (error) {
      console.log(error)
    }
  }

  const getTotalCount = () => {
    let count = 0;
    cart.map((ele) => {
      count += (ele.productId.price * ele.count)
    });
    setQty(count)
  }

  useEffect(() => {
    getCartData()
    getTotalCount()
  }, [loading, qty]);

  console.log(qty)


  if (loading) {
    <div>....loading</div>
  }

  return (
    <div>
      <div className={style.home}>
        {
          cart?.map((item) => {

            return <div key={item._id}>
              <div className={style.img}>
                <img src={item.productId.image} />
              </div>
              <h3 className={style.title}>{item.productId.title}</h3>
              <p>{item.productId.description}</p>
              <p>Rs. {item.productId.price}</p>
              <div className={style.flex}>
                <button onClick={() => updateCount("dec", item._id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => updateCount("inc", item._id)}>+</button>
              </div>

            </div>
          })

        }
      </div>

      <div className={style.total}>Total :- Rs. {qty} </div>
      <PayButton cartItems={cart.cartItems} />
    </div>
  )
}

import React, { useState,useEffect } from 'react'
import axios from 'axios'
import style from "./Styles/home.module.css"
import { useSelector } from 'react-redux';

const getData = async (page = 1) => {
  try {
    let res = await fetch(
      `http://localhost:8080/product/get/all?limit=9&page=${page}`
    );

    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Home = () => {
  const [product, setProduct] = useState([])
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let {token} = useSelector((state) => state.AuthReducer)
  console.log(token)
 
  const handleAdd = async (id) => {
    
      try {
       let res =  await fetch(`http://localhost:8080/cart/add/${id}`, {
        method : "post",
        headers : {
          "Content-Type": "application/json",
          "auth" : token
        }
       });
       let data = await res.json();
       console.log(data)

      } catch (error) {
        console.log(error)
      } 
    
  }


  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);
const handlePageChange = (changeBy) => {
  setPage(page + changeBy);

  fetchAndUpdateData(page + changeBy);
};
const fetchAndUpdateData = async (page = 1) => {
  try {
    
    setLoading(true);
    const data = await getData(page);
    
    setProduct(data);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    console.log(err);
  }
};

 if (loading) {
  return <h1>...loading</h1>;
}
  return (
    <div>
    <div className={style.home}>
    {
      product?.map((item) => (
        <div key={item._id}>
        <div className={style.img}>
          <img src={item.image} />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Rs. {item.price}</p>
        <button className={style.btn} onClick={() => handleAdd(item._id)}>Add to cart</button>
     </div>
      ))
    }
   
    </div>

   
    <div className={style.page}>
    <button className={style.btn1} disabled={page === 1} onClick={() => handlePageChange(-1)}> Prev</button>
  <button className={style.special}>{page}</button>
  <button className={style.btn1} onClick={() => handlePageChange(1)}>Next</button>
  </div>
    </div>
  )
}

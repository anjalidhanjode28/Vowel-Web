import React from 'react'
import { Route,Routes } from 'react-router-dom'
import  Admin  from '../components/Admin/Admin'
import { Cart } from '../Pages/Cart'
import CheckoutSuccess from '../Pages/CheckoutSuccess'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
export const AllRoutes = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/checkout-success" element={<CheckoutSuccess/>} />
       </Routes>
    </div>
  )
}

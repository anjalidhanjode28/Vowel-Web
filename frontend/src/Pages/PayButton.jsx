import axios from "axios";
import { useSelector } from "react-redux";
// import { url } from "../slices/api";

const PayButton = ({ cartItems }) => {
    let url = "http://localhost:8080"
  const user = useSelector((state) => state.AuthReducer.token);
  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        userID: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((error) => console.log(error.message));
    console.log(cartItems);
  };
  return (
    <>
      <button style={{
        color: "white",
        backgroundColor: "#257cff",
        padding: "10px",
        marginTop:"5rem"
      }} 
      onClick={() => handleCheckout()}>Checkout</button>
    </>
  );
};

export default PayButton;
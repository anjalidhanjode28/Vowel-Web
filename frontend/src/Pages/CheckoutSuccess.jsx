import { Heading, Image, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const [time, setTime] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => setTime((prev) => prev - 1), 1000);
    setTimeout(() => navigate("/"), 5000);
  }, []);
  return (
    <>
      <Box align="center">
        <Image
          width={{ base: "300px", md: "600px", lg: "700px" }}
          src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif"
        ></Image>
        <Heading>Checkout Success</Heading>
        <Text>Redirecting you to HomePage in {time} seconds</Text>
      </Box>
    </>
  );
};

export default CheckoutSuccess;
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Flex,Box,FormControl, FormLabel,Input,Stack,InputGroup,InputRightElement,Button,Heading,Text,
    Image,useColorModeValue,} from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authlogin } from '../Redux/Auth/action';


export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleShowClick = () => setShowPassword(!showPassword);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const comingForm = location.state?.form?.pathname || "/";
    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (email === "") {
        alert("Please type your Email");
        return false;
      } else if (!password.length) {
        alert("Password is empty");
        return false;
      } else {
        dispatch(authlogin({ email, password }))
          .then((res) => {
            if(res.payload.token){
              alert("Login Successful")
              navigate("/");
            }else{
              alert("Invalid Credentials")
            }
            
          })
          .catch((err) => {
            
            console.log(err);
          });
      }
    };
   

  return (
    <div>
    <Flex
    minH='100vh' align='center' justify='center'
    bg={useColorModeValue('gray.50', 'gray.700')}>
    <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>

    
      <Box
        rounded='lg'
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow='lg'
        p={9}>
        <Stack spacing={4}>
        <Heading fontSize='2xl' mb="30px">Login </Heading>

        <form onSubmit={handleSubmit} >
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder='Enter your email address'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'}   placeholder='Enter your password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              />
              <InputRightElement h='full'>
                <Button
                  variant='ghost'
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10}>
           
            <Button
             mt="20px"
             type="submit"
              bg="#2563eb"
              color='white'>
              LOGIN
            </Button>
          </Stack>
          </form>
        </Stack>

        <Stack pt={6}>
        <Text align='center'>
          Don't have an account? <Link to="/signup" color="blue" >Sign Up</Link>
        </Text>
      </Stack>

      </Box>
    </Stack>
  </Flex>
    </div>
  )
}

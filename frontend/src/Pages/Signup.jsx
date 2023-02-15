import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Flex,Box,FormControl,FormLabel,Input,InputGroup,InputRightElement,Stack,Button,Heading,Text,
    useColorModeValue,Image} from '@chakra-ui/react';
import { authSignup } from '../Redux/Auth/action';
import { useDispatch } from "react-redux";
import { useLocation, useNavigate,Link } from "react-router-dom";
    
 
export const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowClick = () => setShowPassword(!showPassword);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "") {
      alert("Please type your Email");
      return false;
    } else if (username === "") {
      alert("Please type your Email");
      return false;
    }else if (!password.length) {
      alert("Password is empty");
      return false;
    } else {
      dispatch(authSignup({username, email, password})).then(res=>{
            navigate("/login")
          }).catch(err=>{
            console.log(err)
          })
    }
  };
 
  return (
    <div>
    <Flex
    minH='100vh'
    align='center'
    justify='center'
    bg={useColorModeValue('gray.50', 'gray.800')}>

   
    <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
    
      <Box
        rounded='lg'
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow='lg'
        p={9}>

        <Heading fontSize='2xl' textAlign='center' mb="30px">Sign Up</Heading>
      
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
    
         <FormControl id="firstName" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text"  placeholder='Enter your username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
         </FormControl>
           
        
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email"  placeholder='Enter your email address'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>


          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'}  placeholder='Enter your password'
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

          <Stack spacing={10} pt={2}>
            <Button
              type="submit"
              loadingText="Submitting"
              size="lg"
              bg="#2563eb"
              color='white'>
              SIGN UP
            </Button>
          </Stack>
          <Stack pt={5}>
            <Text align='center'> Already have an account? <Link to="/login" color="blue" >Login</Link></Text>
          </Stack>
        </Stack>
      </form>
      </Box>
    </Stack>
  </Flex>
    </div>
  )
}

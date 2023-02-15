import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Hide,
  Show,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Hide below="sm">
        <Flex
          w="100%"
          bg="#257CFF"
          p="1rem"
          color="white"
          align="center"
          justify="center"
        >
          <Flex
            w="80%"
            // border="1px solid white"
            justify="space-between"
          >
            <Box
              w="11%"
              // border="1px solid white"
            >
              <Link to="/">
                <Image src="foodnation.jpg" w="100%" h="40px" alt="Logo" />
              </Link>
            </Box>
            <Box w="65%">
              <Flex
                justify="space-between"
                // gap="30px"
                // border="1px solid white"
                fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }}
                pt="0.5rem"
              >
        
                <Box>
                  <Link to="/cart">Cart</Link>
                </Box>
                <Box>
                  <Link to={"/login"}>Login</Link>
                </Box>
              </Flex>
            </Box>
            <Box
              w="12%"
              // border="1px solid white"
              pt="0.5rem"
            >
              <Link to={"/signup"}>
                <Button
                  fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1.2rem" }}
                  w={{ base: "1.7rem", md: "3rem", lg: "8.7rem" }}
                  h={{ base: "1.2rem", md: "1.8rem", lg: "2.3rem" }}
                  _hover={{
                    background: "#184FA3",
                    color: "white",
                  }}
                  bg="white"
                  color="#257CFF"
                  py={{ base: "0rem", md: "0.1rem", lg: "0.5rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2.2rem" }}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Hide>

      <Show below="sm">
        <Flex
          w="100%"
          bg="#257CFF"
          p="1rem"
          color="white"
          align="center"
          justify="center"
        >
          <Flex
            w="80%"
            // border="1px solid white"
            justify="space-between"
          >
            <Box
              w="40%"
              // border="1px solid white"
            >
              <Link to="/">
                <Image src="foodnation.jpg" w="100%" alt="Logo" />
              </Link>
            </Box>

            <Box pt="0.5rem">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  border="3px solid white"
                  bg="#257CFF"
                  _hover={{ bg: "#257CFF" }}
                  _expanded={{ bg: "#257CFF" }}
                  onClick={onOpen}
                />
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="white" color="black">
            <DrawerCloseButton />
            <DrawerHeader>
              <Box
                w="70%"
                ml="2.5rem"
                display="flex"
                justify="center"
                align="center"
              >
                <Link to="/">
                  <Image src="foodnation.jpg" alt="Logo" />
                </Link>
              </Box>
            </DrawerHeader>
            <Accordion allowToggle>
          

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Link to="/cart">Cart</Link>
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Link to={"/login"}>Login</Link>
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <Button
                fontSize="1.5rem"
                mt="3rem"
                ml="6rem"
                w="8rem"
                h="2.9rem"
                borderRadius="2rem"
                _hover={{
                  background: "white",
                  color: "#39B7FF",
                  border: "2px solid #39B7FF",
                }}
                bg="#257CFF"
                color="white"
                py={{ base: "0rem", md: "0.1rem", lg: "1.5rem" }}
                px={{ base: "1.5rem", md: "2.2rem", lg: "2.2rem" }}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </Accordion>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};

export default Navbar;
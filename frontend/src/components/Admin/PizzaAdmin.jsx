import React from "react";
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const PizzaAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [name, setName] = React.useState("");
  const [from, setfrom] = React.useState("");
  const [to, setto] = React.useState("");
  const [start, setstart] = React.useState("");
  const [end, setend] = React.useState("");
  const [type, settype] = React.useState("");
  const [price, setprice] = React.useState("");
  const [duration, setduration] = React.useState("");

  const postData = () => {
    const payload = {
      name,
      from,
      to,
      start,
      end,
      type,
      price,
      duration,
    };
    axios
      .post("https://cheerful-lime-firefly.cyclic.app/bookedflight/create", payload, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        getAllData(page);
        toast({
          title: "Flight Details Added",
          description: `You successfully Added`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log("err", err);
        toast({
          title: "Flight Details not added in Admin DB",
          description: `Please Enter Proper Details`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const toast = useToast();
  const getAllData = (page = 1) => {
    axios
      .get(`https://vowel-ba6l.onrender.com/product/get/all?limit=9&page=${page}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };
  const getDataFromCity = () => {
    axios
      .get(`https://vowel-ba6l.onrender.com/product/get/all?q=${query}&page=${page}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {

    axios
      .delete(`https://vowel-ba6l.onrender.com/product/delete/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        getAllData(page);
        toast({
          title: "Selected product details has been deleted",
          description: `You successfully deleted product details for id: ${id}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Failed to Delete the Product",
          description: `You are not Authorised`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handlepage = (p) => {
    setPage(page + p);
    getAllData(page);
  };

  return (
    <Box>
      <div>
        <Box
          display="flex"
          w="25rem"
          margin="auto"
          // border="1px solid red"
          justifyContent="space-between"
        >
          <Input
            w="15rem"
            size={["sm", "sm", "md", "md"]}
            placeholder="Search Pizza By Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={getDataFromCity}
            ml="2rem"
            variant="outline"
            size={["sm", "sm", "md", "md"]}
          >
            Search
          </Button>
        </Box>
        <Box
          display={{ lg: "flex" }}
          mt="2rem"
          justify="space-between"
          // border="1px solid black"
          w="50%"
        >
          {/* All Pizza */}
          <Button
            onClick={() => getAllData(page)}
            variant={"outline"}
            textTransform={"capitalize"}
          >
            All Pizza 
          </Button>

          {/*  Add New Pizza */}
          <Button
            bg="#257CFF"
            borderRadius="1rem"
            variant="solid"
            ml={{ lg: "2rem" }}
            mr={{ lg: "2rem" }}
            mt={{ base: "2rem", lg: "0rem" }}
            mb={{ base: "2rem" }}
            color="white"
            _hover={{
              background: "white",
              color: "#257CFF",
              border: "2px solid #257CFF",
            }}
            onClick={onOpen}
          >
            Add New Pizza
          </Button>
          {/* Save Pizza will route you to the Home page */}
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            size="sm"
          >
            <ModalOverlay />
            <ModalContent
            // border="1rem solid #257cff"
            >
              <ModalHeader
                textDecoration="underline"
                color="#257cff"
                fontWeight="bold"
                fontSize="2.5rem"
              >
                Pizza Details
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Enter Name of the Pizza"
                    type="text"
                    name="departtime"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Image</FormLabel>
                  <Input
                    placeholder="Enter image of the Pizza"
                    type="text"
                    name="aarivtime"
                    value={from}
                    onChange={(e) => setfrom(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    placeholder="Enter Description of the Pizza"
                    type="text"
                    name="duration"
                    value={to}
                    onChange={(e) => setto(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Price</FormLabel>
                  <Input
                    placeholder="Enter Price of the Pizza"
                    type="text"
                    name="fare"
                    value={start}
                    onChange={(e) => setstart(e.target.value)}
                  />
                </FormControl>
                
                
            
              </ModalBody>

              <ModalFooter>
                <Button
                  onClick={postData}
                  bg="#257CFF"
                  borderRadius="1rem"
                  variant="solid"
                  ml="3rem"
                  color="white"
                  _hover={{
                    background: "white",
                    color: "#257CFF",
                    border: "2px solid #257CFF",
                  }}
                  mr={3}
                  //   onClick={handleSubmit}  use onClick for saving new Flight Details
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Link to="/">
            <Button
              bg="#31AE33"
              borderRadius="1rem"
              variant="solid"
              // ml="3rem"
              color="white"
              _hover={{
                background: "white",
                color: "#31AE33",
                border: "2px solid #31AE33",
              }}
              ml="1rem"
            >
              Save
            </Button>
          </Link>
        </Box>
      </div>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Image</Th>
                <Th>Description</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((i,index) => {
                  return (
                    <Tr key={i._id}>
                      <Td>{i.title}</Td>
                      <Td>{i.image}</Td>
                      <Td>{i.description}</Td>
                      <Td>{i.price}</Td>
                      <Td>
                        <Button
                          onClick={() => handleDelete(i._id)}
                          colorScheme="red"
                          borderRadius="1rem"
                          variant="solid"
                          _hover={{
                            background: "white",
                            color: "red",
                            border: "2px solid red",
                          }}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
          <Button disabled={page === 1} onClick={() => handlepage(-1)}>
            Previous
          </Button>
          <Button disabled={true}>{page}</Button>
          <Button onClick={() => handlepage(1)}>Next</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PizzaAdmin;
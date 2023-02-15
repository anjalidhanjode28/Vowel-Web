import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
  Heading,
} from "@chakra-ui/react";

import PizzaAdmin from "./PizzaAdmin";


const Admin = () => {
  return (
    <div>
      <Box bg="#EBF7FF">
      

        <Box color="black" align="center" justify="center" pb="1rem">
          {/* Container */}

          <Box
            mt="2rem"
            mb="2rem"
            w="100%"
            //   border="2px solid black"
            bg="white"
            borderRadius="2rem"
            pt="3rem"
            pb="15rem"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Heading
              fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              textDecoration="underline"
              color="#257CFF"
            >
              Admin Section
            </Heading>

            <Box
              border="1px solid gray"
              mt="2rem"
              width="80%"
              borderRadius="1rem"
              p="1rem"
            >
              <Text fontSize="2rem">Food Nation/Pizza Plans</Text>

              <Text fontSize="1.5rem" color="gray">
                Select any specific tabs for managing Plans
              </Text>

              <Box
                bg="white"
                w="90%"
                color="black"
                align="center"
                justify="center"
                margin="auto"
                borderRadius="1rem"
                p="3rem"
                // border="1px solid white"
                box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
              >
                <Tabs>
                  <TabList>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "2rem" }}
                      fontWeight="bold"
                      mr="2rem"
                    >
                      Database
                    </Text>

                   

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Pizza
                      </Text>
                    </Tab>

                  </TabList>

                  <TabPanels>
                   

                    <TabPanel>
                     
                      <PizzaAdmin />
                    </TabPanel>

                   
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Box>


      </Box>
    </div>
  );
};

export default Admin;
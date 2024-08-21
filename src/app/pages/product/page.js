"use client";
import Nav from "@/app/components/navbar";
import {
  Box,
  VStack,
  Heading,
  Text,
  Divider,
  Progress,
} from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  return (
    <Box m={0} p={0}>
      <Nav />

      <Box w={"full"} px={"24px"}>
        {/** info bar */}
        <Box
          w={"full"}
          h={"92px"}
          bg={"#007AFF26"}
          p={"16px"}
          my={"40px"}
          display={"flex"}
          gap={"12px"}
          alignItems={"center"}
        >
          {/**name and bio */}
          <Box display={"flex"} flexDirection={"column"}>
            <Text fontSize={"30px"} color={"black"}>
              Product Path
            </Text>
          </Box>

          <Divider orientation="vertical" borderColor={"black"} />

          <Text fontSize={"12px"} fontWeight={"bolder"}>
            Last Opened: <br /> 23/08
          </Text>
        </Box>

        {/** progress */}
        <Box
          w={"full"}
          h={"300px"}
          display={"flex"}
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"40px"}
          mt={["200px", "200px", "0px", "0px"]}
        >
          {/** general knowledge */}
          <Link
            href={"./productindustry"}
            w={["full", "full", "45%", "45%"]}
            h={"full"}
          >
            <Box
              w={"full"}
              h={"full"}
              bg={"#F2F2F7"}
              borderRadius={"8px"}
              p={"24px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={"16px"}
            >
              <Heading
                p={"40px"}
                bg={"black"}
                borderRadius={"8px"}
                w={"100%"}
                textAlign={"center"}
                color={"white"}
              >
                General Knowledge
              </Heading>

              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                justifyContent={"flex-start"}
              >
                <Text textAlign={"left"}>8 Lessons left</Text>
                <Box position="relative" w="full">
                  <Progress
                    value={16}
                    size="sm"
                    colorScheme="blue"
                    h={"20px"}
                  />

                  <Text
                    position="absolute"
                    top="0"
                    left="50%"
                    transform="translateX(-50%)"
                    h={"20px"}
                    fontSize="sm"
                    fontWeight="bold"
                    color="black"
                    display="flex"
                    alignItems="center"
                  >
                    16%
                  </Text>
                </Box>
                <Text>Bio</Text>
              </Box>
            </Box>
          </Link>

          {/** indestry knowledge */}
          <Link
            href={"./productindustry"}
            w={["full", "full", "45%", "45%"]}
            h={"full"}
          >
            <Box
              w={"full"}
              h={"full"}
              bg={"#F2F2F7"}
              borderRadius={"8px"}
              p={"24px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={"16px"}
            >
              <Heading
                p={"40px"}
                bg={"black"}
                borderRadius={"8px"}
                w={"100%"}
                textAlign={"center"}
                color={"white"}
              >
                Industry Knowledge
              </Heading>

              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                justifyContent={"flex-start"}
              >
                <Text textAlign={"left"}>7 Lessons left</Text>
                <Box position="relative" w="full">
                  <Progress
                    value={16}
                    size="sm"
                    colorScheme="blue"
                    h={"20px"}
                  />

                  <Text
                    position="absolute"
                    top="0"
                    left="50%"
                    transform="translateX(-50%)"
                    h={"20px"}
                    fontSize="sm"
                    fontWeight="bold"
                    color="black"
                    display="flex"
                    alignItems="center"
                  >
                    16%
                  </Text>
                </Box>
                <Text>Bio</Text>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

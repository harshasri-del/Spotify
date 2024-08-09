
import React from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

const NavBar = ({ currentTab, setCurrentTab }) => {
  return (
    <Box
      bg="gray.800"
      p={3}
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        style={{ position: "absolute", left: 10 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <i className="bi bi-spotify" size="xl" w={8} h={8} color="white"></i>
        <Text fontSize="2xl" color="white" ml={4}>
          Spotify
        </Text>
      </Box>
      <HStack spacing={4} style={{ position: "relative", right: 450 }}>
        <Button
          variant={currentTab === "ForYou" ? "black" : "gray"}
          onClick={() => setCurrentTab("ForYou")}
          color="white"
          _hover={{ bg: "gray" }}
          fontSize="xl"
        >
          For You
        </Button>
        <Button
          variant={currentTab === "TopTracks" ? "black" : "gray"}
          onClick={() => setCurrentTab("TopTracks")}
          color="white"
          _hover={{ bg: "gray" }}
          fontSize="xl"
        >
          Top Tracks
        </Button>
      </HStack>
    </Box>
  );
};

export default NavBar;

import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const SongItem = ({ song, onClick }) => {
  return (
    <Box
      p={3}
      cursor="pointer"
      onClick={onClick}
      borderRadius="md"
      transition="background-color 0.2s"
      _hover={{ bg: "gray.600" }}
    >
      <Box display="flex" alignItems="center">
        <Image
          src={`https://cms.samespace.com/assets/${song.cover}`}
          alt={song.name}
          boxSize="50px"
          borderRadius="50%"
          mr={3}
        />
        <Box>
          <Text fontSize="lg" fontWeight="bold" color={"white"}>
            {song.name}
          </Text>
          <Text fontSize="sm" color="gray.400">
            {song.artist}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SongItem;

import React from "react";
import { Box } from "@chakra-ui/react";
import SongList from "../components/SongList";

const ForYou = ({ songs, currentSongId, onSongClick }) => {
    // console.log(songs)
  return (
    <Box>
      <SongList
        songs={songs}
              currentSongId={currentSongId}
              onSongClick={onSongClick}
      />
    </Box>
  );
};

export default ForYou;

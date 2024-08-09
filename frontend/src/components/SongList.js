// import React from "react";
// import {  VStack } from "@chakra-ui/react";
// import SongItem from "./SongItem";

// const SongList = ({ songs, currentSongId, onSongClick }) => {

//   return (
//     <VStack spacing={3} align="stretch" w={{ base: "100%", md: "55%" }}>
//       {songs.map((song) => (
//         <SongItem
//           key={song.id}
//           song={song}
//           isSelected={song.id === currentSongId}
//           onClick={() => onSongClick(song.id)}
//         />
//       ))}
//     </VStack>
//   );
// };

// export default SongList;
// import React from "react";
// import { VStack } from "@chakra-ui/react";
// import SongItem from "./SongItem";

// const SongList = ({ songs, currentSongId, onSongClick }) => {
//   return (
//     <VStack spacing={3} align="stretch" w={{ base: "100%", md: "55%" }}>
//       {songs.map((song) => (
//         <SongItem
//           key={song.id}
//           song={song}
//           isSelected={song.id === currentSongId}
//           onClick={() => onSongClick(song.id)}
//         />
//       ))}
//     </VStack>
//   );
// };

// export default SongList;

import React from "react";
import { VStack } from "@chakra-ui/react";
import SongItem from "./SongItem";

const SongList = ({ songs, currentSongId, onSongClick }) => {
  return (
    <VStack spacing={3} align="stretch" w={{ base: "100%", md: "55%" }}>
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onClick={() => onSongClick(song.id)}
        />
      ))}
    </VStack>
  );
};

export default SongList;

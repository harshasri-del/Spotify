import React, { useState } from "react";
import { ChakraProvider, Box, HStack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ForYou from "./pages/ForYou";
import useSongs from "./hooks/useSongs";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

const App = () => {
  const { songs, loading } = useSongs();
  const [currentSongId, setCurrentSongId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("ForYou");

  const filteredSongs = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentSong =
    songs.find((song) => song.id === currentSongId) || filteredSongs[0];

  const songItemId = (id) => {
    console.log(id);
    setCurrentSongId(id);
  };

  return (
    <ChakraProvider>
      <Box style={{ backgroundColor: "black" }}>
        <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Box w="full" maxW="1200px" mx="auto" p={4}>
          <HStack spacing={4} p={4}>
            {loading ? (
              <Box>Loading...</Box>
            ) : (
              <Box w="full">
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                {currentTab === "ForYou" && (
                  <ForYou
                    songs={filteredSongs}
                    currentSongId={currentSongId}
                    onSongClick={songItemId} 
                  />
                )}
                {currentTab === "TopTracks" && (
                  <ForYou
                    songs={filteredSongs}
                    currentSongId={currentSongId}
                    onSongClick={songItemId}
                  />
                )}
              </Box>
            )}
            <MusicPlayer
              currentSong={currentSong}
              songItemId={songItemId} 
            />
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;

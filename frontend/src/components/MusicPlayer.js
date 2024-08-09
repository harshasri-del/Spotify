import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const MusicPlayer = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (value) => {
    if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
      const newTime = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(value);
    }
  };

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    };

    const audio = audioRef.current;
    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (currentSong) {
      setProgress(0);
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    }
  }, [currentSong, isPlaying]);

  if (!currentSong) {
    return (
      <Box textAlign="center" w={{ base: "100%", md: "100%" }}>
        <Text fontSize="xl" fontWeight="bold">
          No song selected
        </Text>
      </Box>
    );
  }

  return (
    <Box
      textAlign="center"
      w={{ base: "100%", md: "100%" }}
      key={currentSong.id}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={"white"}
        textAlign={"start"}
        ml={47}
      >
        {currentSong.name}
      </Text>
      <Text fontSize="md" color="gray.100" textAlign={"start"} ml={47} mb={5}>
        {currentSong.artist}
      </Text>
      <Image
        src={`https://cms.samespace.com/assets/${currentSong.cover}`}
        borderRadius="md"
        mb={3}
        w={{ base: "100%", md: "480px" }}
        h={{ base: "200px", md: "480px" }}
        objectFit="cover"
        ml={55}
      />

      <HStack spacing={5} justifyContent="center" mt={3}>
        <Button>
          <FaStepBackward />
        </Button>
        <Button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button>
          <FaStepForward />
        </Button>
      </HStack>
      <Slider mt={3} value={progress} onChange={handleProgress}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default MusicPlayer;

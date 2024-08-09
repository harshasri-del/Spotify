import { useState, useEffect } from "react";
import axios from "axios";

const useSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://cms.samespace.com/items/songs"
        );
        setSongs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching songs:", error);
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return { songs, loading };
};

export default useSongs;

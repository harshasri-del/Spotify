import React from "react";
import { Input } from "@chakra-ui/react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      placeholder="Search song, artist"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      mb={4}
      color={"white"}
    />
  );
};


export default SearchBar
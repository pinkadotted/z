'use client'
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const SearchBar = ({placeholder}: {placeholder: string}) => {
  return (
    <div className="flex w-full px-2">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="text"
          placeholder={placeholder}
          width='100%'
          rounded={"2xl"}
          focusBorderColor="blue.200"
          borderWidth={'small'}
        />
      </InputGroup>
      </div>
  );
};

export default SearchBar;

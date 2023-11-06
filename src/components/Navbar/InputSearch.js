"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter(); // Panggil useRouter sebagai fungsi

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;

    router.push(`/search/${keyword}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyPress={handleKeyPress} // Menambahkan event handler untuk key press
      ></input>
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;

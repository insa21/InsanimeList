"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const HandleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button className="text-color-primary" onClick={HandleBack}>
        <ArrowSquareLeft size={32}></ArrowSquareLeft>
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ name, icon, route, isActive }: any) => {
  return (
    <Link className="flex py-4 my-3 px-5 w-4/5 items-center rounded-full hover:bg-slate-200 cursor-pointer" href={route}>
      <Image src={isActive ? icon[1] : icon[0]} alt={`${name}-icon`} width={30} height={30} />
      <h1 className={`outline-1 px-5 text-xl ${isActive ? 'font-semibold' : 'font-normal'}`}>{name}</h1>
    </Link>
  );
};

export default MenuItem;

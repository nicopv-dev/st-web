"use client";

import React from "react";
import ThemeButton from "./theme-btn";
import Wrapper from "../ui/wrapper";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="border-b border-b-zinc-800">
      <Wrapper className="h-14 flex items-center justify-between">
        <Link href="/posts">
          <Image
            alt="logo"
            src={"https://www.solotodo.cl/logo_fondo_oscuro.svg"}
            width={100}
            height={24}
            objectFit="cover"
          />
        </Link>
        {/* <ThemeButton /> */}
      </Wrapper>
    </div>
  );
}

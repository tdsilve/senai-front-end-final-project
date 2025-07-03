"use client";
import Image from "next/image";
import React from "react";

export const PostImage = ({ src }: { src: string }) => {
  return (
    <div className="relative w-[450px] h-[500px]">
      <Image
        src={src}
        fill
        alt="issue cover image"
        className="opacity-0 duration-[2s] transition-opacity"
        onLoadingComplete={(e) => {
          e.classList.remove("opacity-0");
        }}
      />
    </div>
  );
};

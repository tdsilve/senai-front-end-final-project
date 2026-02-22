"use client";
import Image from "next/image";

type PostImageProps = {
  src: string 
}

export const PostImage = ({ src }: PostImageProps) => {
  return (
    <div className="relative w-[450px] h-[500px]">
      <Image
        src={src}
        fill
        alt="issue cover image"
        className="opacity-0 duration-[2s] transition-opacity object-contain"
        onLoad={(e) => {
          e.currentTarget.classList.remove("opacity-0");
        }}
      />
    </div>
  );
};

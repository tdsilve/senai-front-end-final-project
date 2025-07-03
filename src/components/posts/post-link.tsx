import React from "react";

type PostLinkProps = {
  text: string;
};

export const PostLink = ({ text }: PostLinkProps) => {
  return (
    <a className="text-white hover:underline hover:cursor-pointer">{text}</a>
  );
};

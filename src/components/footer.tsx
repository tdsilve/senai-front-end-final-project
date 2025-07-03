import React from "react";

export const Footer = () => {
  return (
    <footer className="text-xs">
      <div className="mb-4">
        <p className="w-56">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>
        <p>© 2022 Published by studio Milk</p>
      </div>
      <div className="flex justify-between">
        <p className="underline">Privacy Police</p>
        <p className="underline">info@backstagetalks.com</p>
      </div>
    </footer>
  );
};

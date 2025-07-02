import { Post } from "@/types";
export const posts: Post[] = [
  {
    id: 1,
    issue: 5,
    isSoldOut: false,
    theme: { background: "#00c1b5" },
    imgSrc: "/images/img1.png",
  },
  {
    id: 2,
    issue: 4,
    isSoldOut: false,
    theme: { background: "#ff651a" },
    imgSrc: "/images/img2.png",
  },
  {
    id: 3,
    issue: 3,
    isSoldOut: false,
    theme: { background: "#ffbe00" },
    imgSrc: "/images/img3.png",
  },
  {
    id: 4,
    issue: 2,
    isSoldOut: false,
    theme: { background: "#1d3fbb" },
    imgSrc: "/images/img4.png",
  },
  {
    id: 5,
    issue: "1 is sold out.",
    isSoldOut: true,
    theme: { background: "#e30512" },
    imgSrc: "/images/img5.png",
  },
];

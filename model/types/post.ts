export type Post = {
  id: number;
  issue: number | string;
  isSoldOut: boolean;
  theme: { background: string };
  imgSrc: string;
};

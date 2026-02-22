type PostLinkProps = {
  text: string;
};

export const PostLink = ({ text }: PostLinkProps) => {
  return (
    <span className="text-white hover:underline hover:cursor-pointer">{text}</span>
  );
};

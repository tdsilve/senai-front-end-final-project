import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Posts } from "../components/posts/posts";

export default function Home() {
  return (
    <div>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

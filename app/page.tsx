import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Posts } from "@/components/posts/posts";

export default function Home() {
  return (
    <div className="min-h-screen flex border">
      <div className="flex flex-col flex-1 gap-y-4 border-4 border-black p-6">
        <Header />
        <Posts />
        <Footer />
      </div>
    </div>
  );
}

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Posts } from "@/components/posts/posts";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col flex-1 gap-y-4 p-6">
        <Header />
        <Posts />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

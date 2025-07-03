import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Posts } from "@/components/posts/posts";
import { Suspense } from "react";
import { Spinning } from "@/components/spinning";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[95vh] gap-y-4">
      <Header />

      <Suspense
        fallback={
          <div className=" flex justify-center items-center flex-1">
            <Spinning />
          </div>
        }
      >
        <Posts />
      </Suspense>
      <Footer />
    </div>
  );
}

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Upcoming from "@/components/main/Upcoming";
import Explore from "@/components/main/Explore";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Explore />
        <Encryption />
        <Upcoming />
      </div>
    </main>
  );
}

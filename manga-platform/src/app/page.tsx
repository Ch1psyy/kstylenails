import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="bg-background font-sans dark:bg-background">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center justify-center pt-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tighter text-foreground dark:text-foreground">
            Discover Your Next Favorite Story
          </h1>
          <p className="max-w-md text-lg leading-8 text-secondary dark:text-secondary">
            Explore a universe of manga, manhua, and webtoons.
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Button className="h-12 w-full md:w-[158px]">Get Started</Button>
            <Button variant="ghost" className="h-12 w-full md:w-[158px]">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

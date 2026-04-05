import { Header } from "@/components/ui/Header";
import { LeftSidebar } from "@/components/ui/LeftSidebar";
import { RightSidebar } from "@/components/ui/RightSidebar";
import { Feed } from "@/components/ui/Feed";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F6F4" }}>
      <Header />

      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex gap-6 pt-20 pb-10">
          {/* Left Sidebar — hidden on mobile/tablet */}
          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-20">
              <LeftSidebar />
            </div>
          </aside>

          {/* Main Feed */}
          <main className="flex-1 min-w-0 max-w-[620px] w-full mx-auto lg:mx-0">
            <Feed />
          </main>

          {/* Right Sidebar — hidden on mobile/tablet/large */}
          <aside className="hidden xl:block w-[300px] flex-shrink-0">
            <div className="sticky top-20">
              <RightSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

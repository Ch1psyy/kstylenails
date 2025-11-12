import React from "react";
import { Button } from "./Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <h1 className="text-2xl font-bold text-foreground">MangaPlatform</h1>
      </div>
      <nav className="flex items-center gap-4">
        <Button variant="ghost">Discover</Button>
        <Button variant="ghost">Library</Button>
        <Button variant="ghost">Community</Button>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="secondary">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export { Header };

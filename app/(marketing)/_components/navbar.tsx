"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import ModeToggle from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] flex fixed top-0 p-6 items-center w-full",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
            <p>Loading...</p>
        )} { !isAuthenticated && !isLoading && (
            <>
            <SignInButton mode="modal">
                <Button variant="ghost" size="sm">Log In</Button>
            </SignInButton>
            <SignInButton mode="modal">
                <Button size="sm">Get Potion free</Button>
            </SignInButton>
            </>
        ) }
        <ModeToggle />
      </div>
    </div>
  );
};

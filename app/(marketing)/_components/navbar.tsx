"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import ModeToggle from "@/components/mode-toggle";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={cn("z-50 bg-background dark:bg-[#1f1f1f] flex fixed top-0 p-6 items-center w-full", scrolled && "border-b shadow-sm")}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <ModeToggle />
            </div>
        </div>
    )
}
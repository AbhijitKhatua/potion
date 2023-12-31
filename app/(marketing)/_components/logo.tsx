import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins ({
    subsets:["latin"],
    weight: ["400", "600", "700"]
})

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
            src="/potion.svg"
            height={40}
            width={40}
            className="object-contain dark:hidden"
            alt="logo"
            />
            <Image
            src="/light-logo.svg"
            height={40}
            width={40}
            className="object-contain hidden dark:block"
            alt="logo"
            />
            <p className={cn("font-bold", font.className)}>
                Potion
            </p>
        </div>
    )
}
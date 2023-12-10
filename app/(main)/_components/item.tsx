"use client";

import { Id } from "@/convex/_generated/dataModel";
import { LucideIcon } from "lucide-react";

interface ItemProps {
  id? : Id
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

export const Item = ({ label, onClick, icon: Icon }: ItemProps) => {
  return (
    <div
      onClick={onClick}
      role="button"
      style={{paddingLeft: "12px" }}
      className="group min-h-[27px] text-sm py-1 pl-[12px] pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium"
    >
      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );
};

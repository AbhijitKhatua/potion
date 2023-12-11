"use client";

import { Id } from "@/convex/_generated/dataModel";
import { ChevronDown, ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";

interface ItemProps {
  id? : Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearched?: boolean;
  level?: boolean;
  onExpand?: ()=> void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

export const Item = ({ 
  id, 
  label, 
  onClick, 
  icon: Icon,
  active,
  documentIcon,
  isSearched,
  level = 0,
  onExpand,
  expanded,
 }: ItemProps) => {
  const ChevronIcon = expanded? ChevronDown : ChevronRight

  return (
    <div
      onClick={onClick}
      role="button"
      style={{
        paddingLeft: level? `${(level*12) + 12}px` :"12px" 
      }}
      className="group min-h-[27px] text-sm py-1 pl-[12px] pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium"
    >
      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );
};

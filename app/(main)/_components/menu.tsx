"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { Id } from "@/convex/_generated/dataModel";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";



interface MenuProps {
  documentId: Id<"documents">;
};

export const Menu = ({documentId}: MenuProps) => {

  const router = useRouter();
  const user = useUser();
  const archive = useMutation(api.documents.archive)

  return <div>Menu</div>;
};

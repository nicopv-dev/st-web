"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className="flex justify-center">
      <div className={cn("max-w-screen-xl w-full", className)}>{children}</div>
    </div>
  );
}

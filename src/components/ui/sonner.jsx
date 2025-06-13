"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group bg-red-400"
      style={{
        "--normal-bg": "#212121",
        "--normal-text": "#f3f4f6",
        "--normal-border": "#313131",
      }}
      {...props}
    />
  );
};

export { Toaster };

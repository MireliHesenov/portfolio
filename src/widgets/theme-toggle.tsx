"use client";

import { useTheme } from "next-themes";

import { motion } from "motion/react";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative overflow-clip"
      onClick={handleThemeToggle}
    >
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: theme !== "dark" ? 180 : 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-8 h-8 origin-center"
      >
        <MoonIcon className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <SunIcon className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
      </motion.span>
    </Button>
  );
}

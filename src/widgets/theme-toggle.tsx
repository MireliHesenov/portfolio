"use client";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Button variant="outline" size="icon" onClick={handleThemeToggle}>
      <SunIcon className="block dark:hidden" />
      <MoonIcon className="hidden dark:block" />
    </Button>
  );
}

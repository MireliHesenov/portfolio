"use client";

import Link from "next/link";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import { motion } from "motion/react";

import {
  BaseList,
  BaseListItem,
  BaseListItemContent,
  BaseListItemTitle,
} from "@/components/ui/base-list";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";

type HeaderMobileNavigationProps = {
  navigation: {
    label: string;
    href: string;
    icon: string;
  }[];
};

export function HeaderMobileNavigation({
  navigation,
}: HeaderMobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="group flex md:hidden">
        <Button variant="outline" size="icon">
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </motion.span>
        </Button>
      </SheetTrigger>

      <SheetContent side="top" isUnderHeader>
        <SheetHeader>
          <SheetTitle>Quick Navigation</SheetTitle>
        </SheetHeader>

        <BaseList className="flex flex-col gap-1 p-4">
          {navigation.map((item) => (
            <BaseListItem asChild key={item.label}>
              <Link href={item.href}>
                <BaseListItemContent>
                  <BaseListItemTitle>
                    <span className="mr-3 text-lg">{item.icon}</span>{" "}
                    {item.label}
                  </BaseListItemTitle>
                </BaseListItemContent>
              </Link>
            </BaseListItem>
          ))}
        </BaseList>
      </SheetContent>
    </Sheet>
  );
}

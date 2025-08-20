import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";
import React from "react";

export default function PortfolioPage() {
  return (
    <main className="py-6 md:py-12 mt-auto">
      <div className="container">
        <Empty size="lg">
          <div className="text-6xl">🏗️</div>
          <EmptyContent>
            <EmptyTitle>Work in progress</EmptyTitle>
            <EmptyDescription>
              I&apos;m working on it, come back later
            </EmptyDescription>
          </EmptyContent>
        </Empty>
      </div>
    </main>
  );
}

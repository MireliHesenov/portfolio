import { cn } from "@/lib/utils";

type GuidelinesProps = {
  className?: string;
  isFixed?: boolean;
};

export function Guidelines({ className, isFixed = false }: GuidelinesProps) {
  return (
    <div
      className={cn(
        "flex absolute inset-0 -z-[1] h-full [&_div]:h-full pointer-events-none",
        isFixed && "fixed",
        className
      )}
    >
      <div className="flex-1 text-primary/5 dark:text-primary/7 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] pointer-events-none" />
      <div className="w-full max-w-screen-xl mx-auto border-x border-line shrink-0" />
      <div className="flex-1 text-primary/5 dark:text-primary/7 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] pointer-events-none" />
    </div>
  );
}

export function GuidelinesCornerPlus() {
  return (
    <div className="absolute inset-0 max-w-screen-xl mx-auto md:block hidden pointer-events-none">
      <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:w-px after:h-10 after:bg-foreground after:-translate-y-1/2"></span>
      <span className="after:content-[''] after:absolute after:-top-px after:left-0 after:w-10 after:h-px after:bg-foreground after:-translate-x-1/2"></span>

      <span className="after:content-[''] after:absolute after:top-0 after:right-0 after:w-px after:h-10 after:bg-foreground after:-translate-y-1/2"></span>
      <span className="after:content-[''] after:absolute after:-top-px after:right-0 after:w-10 after:h-px after:bg-foreground after:translate-x-1/2"></span>

      <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-px after:h-10 after:bg-foreground after:translate-y-1/2"></span>
      <span className="after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-10 after:h-px after:bg-foreground after:-translate-x-1/2"></span>

      <span className="after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-px after:h-10 after:bg-foreground after:translate-y-1/2"></span>
      <span className="after:content-[''] after:absolute after:-bottom-px after:right-0 after:w-10 after:h-px after:bg-foreground after:translate-x-1/2"></span>
    </div>
  );
}

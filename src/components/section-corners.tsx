export function SectionCorners() {
  return (
    <div className="absolute inset-0 max-w-screen-xl mx-auto md:block hidden pointer-events-none opacity-40">
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

import { cn } from "@/lib/utils";

function PageHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("flex flex-col gap-2 mb-12", className)} {...props}>
      {children}
    </section>
  );
}

function PageHeaderTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1 className={cn("text-3xl md:text-5xl font-bold", className)} {...props}>
      {children}
    </h1>
  );
}

function PageHeaderDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("md:max-w-[80%] text-lg text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export { PageHeader, PageHeaderTitle, PageHeaderDescription };

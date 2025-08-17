import { cn } from "@/lib/utils";

function SectionHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-start gap-6 mb-6", className)} {...props} />;
}

function SectionHeaderContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-header-content"
      className={cn("flex-1 space-y-2", className)}
      {...props}
    />
  );
}

function SectionHeaderTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return <h2 className={cn("text-3xl font-bold", className)} {...props} />;
}

function SectionHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("md:max-w-[80%] text-muted-foreground", className)} {...props} />;
}

function SectionHeaderActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("leading-[36px]", className)} {...props} />;
}

export {
  SectionHeader,
  SectionHeaderContent,
  SectionHeaderTitle,
  SectionHeaderDescription,
  SectionHeaderActions,
};

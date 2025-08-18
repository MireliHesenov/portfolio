import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

function BaseList({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("-mx-4", className)} {...props} />;
}

function BaseListItem({
  asChild,
  className,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "flex flex-col md:flex-row md:items-center md:gap-4 py-4 px-4 rounded-lg",
        "[&a]:hover:bg-accent [&button]:hover:bg-accent",
        className
      )}
      {...props}
    />
  );
}

function BaseListItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex-1 space-y-1", className)} {...props} />;
}

function BaseListItemTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("text-lg font-semibold", className)} {...props} />;
}

function BaseListItemDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-base text-muted-foreground", className)}
      {...props}
    />
  );
}

function BaseListItemSlot({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props} />
  );
}

export {
  BaseList,
  BaseListItem,
  BaseListItemContent,
  BaseListItemTitle,
  BaseListItemDescription,
  BaseListItemSlot,
};

"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const emptyVariants = tv({
  slots: {
    root: "flex flex-col items-center justify-center text-center w-full",
    content: "",
    title: "",
    subTitle: "",
    description: "text-muted-foreground",
  },

  variants: {
    size: {
      default: {
        root: "gap-4",
        content: "space-y-2",
        title: "text-xl font-semibold",
        subTitle: "text-lg font-semibold",
        description: "text-base font-normal",
      },
      sm: {
        root: "gap-2",
        content: "space-y-1",
        title: "text-sm font-medium",
        subTitle: "text-sm font-normal",
        description: "text-xs font-normal",
      },
      lg: {
        root: "gap-4",
        content: "space-y-2",
        title: "text-3xl font-bold",
        subTitle: "text-xl font-semibold",
        description: "text-lg font-normal",
      },
    },
  },

  defaultVariants: {
    size: "default",
  },
});

const EmptyContext = createContext<VariantProps<typeof emptyVariants>>({});

type EmptyProps = React.ComponentProps<"div"> &
  VariantProps<typeof emptyVariants>;
function Empty({ className, children, size, ...props }: EmptyProps) {
  return (
    <EmptyContext.Provider value={{ size }}>
      <div className={emptyVariants({ size }).root({ className })} {...props}>
        {children}
      </div>
    </EmptyContext.Provider>
  );
}

function EmptyContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { size } = useContext(EmptyContext);

  return (
    <div className={emptyVariants({ size }).content({ className })} {...props}>
      {children}
    </div>
  );
}

function EmptyTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  const { size } = useContext(EmptyContext);

  return (
    <h3 className={emptyVariants({ size }).title({ className })} {...props}>
      {children}
    </h3>
  );
}

function EmptySubTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"h4">) {
  const { size } = useContext(EmptyContext);

  return (
    <h4 className={emptyVariants({ size }).subTitle({ className })} {...props}>
      {children}
    </h4>
  );
}

function EmptyDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  const { size } = useContext(EmptyContext);

  return (
    <p
      className={emptyVariants({ size }).description({ className })}
      {...props}
    >
      {children}
    </p>
  );
}

function EmptyActions({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-wrap gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Empty,
  EmptyActions,
  EmptyContent,
  EmptyDescription,
  EmptySubTitle,
  EmptyTitle,
};

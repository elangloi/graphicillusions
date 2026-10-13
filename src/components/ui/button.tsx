import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-brand-gradient font-semibold text-white shadow-[0_6px_22px_rgba(30,167,228,.28)] hover:brightness-115 hover:shadow-[0_8px_28px_rgba(30,167,228,.4)]",
        outline:
          "border-[1.5px] border-brand-blue font-semibold text-ice hover:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-accent",
        ghost:
          "text-soft hover:bg-accent hover:text-foreground aria-expanded:bg-accent",
        destructive:
          "bg-destructive/20 text-destructive hover:bg-destructive/30 focus-visible:ring-destructive/40",
        link: "text-sky underline-offset-4 hover:underline",
      },
      size: {
        default:
          "min-h-12 gap-2 rounded-full px-6 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        sm: "min-h-10 gap-1.5 rounded-full px-4 text-sm",
        lg: "min-h-14 gap-2 rounded-full px-8 text-lg",
        icon: "size-12 rounded-full [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-9 rounded-full [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

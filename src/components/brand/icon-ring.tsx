import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const iconRingVariants = cva(
  'border-gradient relative z-[1] flex flex-none items-center justify-center rounded-full border-2 border-transparent text-ice',
  {
    variants: {
      size: {
        sm: 'size-12 [&_svg]:size-6',
        md: 'size-14 [&_svg]:size-6',
        lg: 'size-12 sm:size-16 [&_svg]:size-6 sm:[&_svg]:size-[26px]',
        xl: 'size-20 [&_svg]:size-9',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

/** A circular icon badge with the brand gradient as its rim. */
export function IconRing({
  className,
  size,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof iconRingVariants>) {
  return <span className={cn(iconRingVariants({ size }), className)} {...props} />
}

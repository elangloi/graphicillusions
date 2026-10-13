import { cn } from 'cn'

import logo from '@/assets/brand/logo.png'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Graphic Illusions logo"
      width={490}
      height={179}
      className={cn('-ml-2 block h-auto w-[min(400px,100%)]', className)}
    />
  )
}

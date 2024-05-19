import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';


type Props = {
    key: string;
    href: string;
    label: string;
    isActive?: boolean;
}

const NavButton = ({ key, href, label, isActive }: Props) => {
  return (
    <Button key={key}
      asChild
      size={'sm'}
      variant={'outline'}
      className={cn(
        'w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent-0 outline-none text-white focus:bg-white/30 transition',
        isActive ? 'bg-white/10 text-white' : 'bg-transparent'
      )}
    >
        <Link href={href} key={label}>
            {label}
        </Link>
    </Button>
  )
}

export default NavButton;
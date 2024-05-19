'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import NavButton from './nav-button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/components/ui/sheet';
import { useMedia } from 'react-use';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const routes = [
  {href: '/', label: 'Overview'},
  {href: '/transactions', label: 'Transactions'},
  {href: '/accounts', label: 'Accounts'},
  {href: '/categories', label: 'Categories'},
  {href: '/settings', label: 'Settings'},
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();
  const isMobile = useMedia('(max-width: 1024px)', false);//Width <= 1024px it will return true

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  }; 

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant='outline'
            size='sm'
            className='font-normal bg-white/10 hover:bg-white/30 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent-0
            outline-none text-white focus:bg-white/30 transition'
          >
            <Menu className='size-4' />
          </Button>

          <SheetContent side={'left'} className='px-2'>
            <nav className='flex flex-col gap-y-2 pt-16'>
              {routes?.map((route) => (
                <Button key={route.href}
                  variant={route.href === pathName ? 'secondary' : 'ghost'}
                  onClick={() => onClick(route.href)}
                  className='w-full justify-start'
                >
                  {route.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </SheetTrigger>
      </Sheet>
    );
  }


  return (
    <nav className='hidden lg:flex items-center gap-x-2 overflow-x-auto'>
      {routes?.map((route) => (
        <NavButton 
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathName === route.href}
        />
      ))}
    </nav>
  )
}

export default Navigation;

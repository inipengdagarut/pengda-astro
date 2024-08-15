interface Avatar {
  src: string;
  alt: string;
  fallbackText: string;
  size?: "sm" | "md" | "lg" | "xl" | '2xl'
}

import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function avaSize(size: "sm" | "md" | "lg" | "xl" | "2xl" | undefined) {
  if (size === 'sm') return ('w-8 h-8')
  if (size === 'lg') return ('w-12 h-12')
  if (size === 'xl') return ('w-16 h-16')
  if (size === '2xl') return ('w-24 h-24')
  return ('w-10 h-10')
}


export function AvatarComponent({ src, alt, fallbackText, size }: Avatar) {
  return (
    <Avatar className={`${avaSize(size)}`}>
      <AvatarImage src={src} alt={alt} className={`${avaSize(size)}`} />
      <AvatarFallback className='font-serif'>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};
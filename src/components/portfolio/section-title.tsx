import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'mb-10 text-center text-3xl font-bold font-headline text-primary md:text-4xl',
        className
      )}
    >
      {children}
    </h2>
  );
}

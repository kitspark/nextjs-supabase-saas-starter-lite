import { cn } from '@kit/globals/functions/cn';
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={cn('rounded-lg border bg-white p-6 shadow-sm', className)}>
      {title && <h3 className="mb-4 text-lg font-semibold">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
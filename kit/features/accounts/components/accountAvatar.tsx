import React from 'react';
import { Account } from '../hooks/useAccount';

interface AccountAvatarProps {
  account: Account;
  size?: 'sm' | 'md' | 'lg';
}

export function AccountAvatar({ account, size = 'md' }: AccountAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg'
  };

  const initials = account.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold`}
    >
      {initials}
    </div>
  );
}
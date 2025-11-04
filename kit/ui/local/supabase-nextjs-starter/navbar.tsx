import React, { useState } from 'react';
import { Button } from './button';

interface NavbarProps {
  logo?: string;
  onSearch?: (query: string) => void;
}

export function Navbar({ logo = 'MyApp', onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">{logo}</div>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="primary" size="sm">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
import { Card } from '@kit/ui/local/card';
import React, { useState } from 'react';
import { Account } from '../../hooks/useAccount';
import { Button } from '@kit/ui/local/supabase-nextjs-starter/button';


interface AccountEditProps {
  account: Account;
  onSave?: (account: Account) => void;
}

export function AccountEdit({ account, onSave }: AccountEditProps) {
  const [name, setName] = useState(account.name);
  const [email, setEmail] = useState(account.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave?.({ ...account, name, email });
  };

  return (
    <Card title="Edit Account" className="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <Button type="submit" variant="primary">Save Changes</Button>
          <Button type="button" variant="secondary">Cancel</Button>
        </div>
      </form>
    </Card>
  );
}
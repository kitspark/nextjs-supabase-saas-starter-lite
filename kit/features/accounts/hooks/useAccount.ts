import { useState, useEffect } from "react";

export interface Account {
  id: string;
  name: string;
  email: string;
  type: "personal" | "team";
  createdAt: Date;
}

export function useAccount(accountId?: string) {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!accountId) {
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setAccount({
        id: accountId,
        name: "John Doe",
        email: "john@example.com",
        type: "personal",
        createdAt: new Date(),
      });
      setLoading(false);
    }, 500);
  }, [accountId]);

  return { account, loading, error };
}

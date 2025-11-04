import { Account } from "../hooks/useAccount";

export function isTeamAccount(account: Account | null): boolean {
  return account?.type === "team";
}

export function getAccountDisplayName(account: Account | null): string {
  return account?.name || "Unknown User";
}

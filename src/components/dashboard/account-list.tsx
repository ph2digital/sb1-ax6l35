import { BarChart3, Facebook, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Account {
  id: string;
  name: string;
  platform: 'google' | 'meta';
  status: 'active' | 'pending' | 'needs_attention';
  metrics: {
    spend: number;
    impressions: number;
    clicks: number;
  };
}

interface AccountListProps {
  accounts: Account[];
  onAccountSelect: (id: string) => void;
}

export function AccountList({ accounts, onAccountSelect }: AccountListProps) {
  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <Card 
          key={account.id}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onAccountSelect(account.id)}
        >
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              {account.platform === 'google' ? (
                <Mail className="w-6 h-6 text-red-500" />
              ) : (
                <Facebook className="w-6 h-6 text-blue-500" />
              )}
              <div>
                <h3 className="font-medium">{account.name}</h3>
                <p className="text-sm text-gray-500">
                  {account.platform === 'google' ? 'Google Ads' : 'Meta Ads'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">Spend</p>
                <p className="text-lg">${account.metrics.spend}</p>
              </div>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
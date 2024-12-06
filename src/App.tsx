import { BarChart2, DollarSign, Users, Target } from 'lucide-react';
import { MetricCard } from './components/dashboard/metric-card';
import { AccountList } from './components/dashboard/account-list';

const mockAccounts = [
  {
    id: '1',
    name: 'Main Google Ads',
    platform: 'google',
    status: 'active',
    metrics: {
      spend: 1234.56,
      impressions: 50000,
      clicks: 2500,
    },
  },
  {
    id: '2',
    name: 'Facebook Campaign',
    platform: 'meta',
    status: 'needs_attention',
    metrics: {
      spend: 856.32,
      impressions: 35000,
      clicks: 1800,
    },
  },
];

function App() {
  const handleAccountSelect = (id: string) => {
    console.log('Selected account:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Gerencie suas campanhas publicitárias</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Investido"
            value="R$ 2.090,88"
            change={12.5}
            icon={<DollarSign className="w-5 h-5 text-green-600" />}
          />
          <MetricCard
            title="Impressões"
            value="85.000"
            change={-2.3}
            icon={<Users className="w-5 h-5 text-blue-600" />}
          />
          <MetricCard
            title="Cliques"
            value="4.300"
            change={8.1}
            icon={<Target className="w-5 h-5 text-purple-600" />}
          />
          <MetricCard
            title="CTR Médio"
            value="5.06%"
            change={1.2}
            icon={<BarChart2 className="w-5 h-5 text-orange-600" />}
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Suas Contas</h2>
          <AccountList 
            accounts={mockAccounts}
            onAccountSelect={handleAccountSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
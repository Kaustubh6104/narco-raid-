import React, { useState } from 'react';
import { SearchFilters } from './SearchFilters';
import { DataTable } from './DataTable';
import { FlaggedUser } from '../types';

const mockData: FlaggedUser[] = [
  {
    id: 1,
    username: "suspicious_user_92",
    messageId: "msg_847362",
    senderId: "sender_738",
    receiverId: "recv_847",
    platform: "Telegram",
    priorityScore: 89,
    timestamp: "2024-03-15T14:23:00Z"
  },
  {
    id: 2,
    username: "hidden_dealer_47",
    messageId: "msg_847363",
    senderId: "sender_739",
    receiverId: "recv_848",
    platform: "WhatsApp",
    priorityScore: 95,
    timestamp: "2024-03-15T14:25:00Z"
  },
  {
    id: 3,
    username: "crypto_market_x",
    messageId: "msg_847364",
    senderId: "sender_740",
    receiverId: "recv_849",
    platform: "Instagram",
    priorityScore: 78,
    timestamp: "2024-03-15T14:27:00Z"
  }
];

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const filteredData = mockData.filter(user => {
    const matchesSearch = 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.messageId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.senderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || user.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">NCB Monitoring Dashboard</h1>
          <p className="text-gray-400">Real-time surveillance of flagged communications</p>
        </header>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
          <SearchFilters
            searchTerm={searchTerm}
            selectedPlatform={selectedPlatform}
            onSearchChange={setSearchTerm}
            onPlatformChange={setSelectedPlatform}
          />
          <DataTable data={filteredData} />
        </div>
      </div>
    </div>
  );
}
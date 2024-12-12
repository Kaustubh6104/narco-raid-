import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  selectedPlatform: string;
  onSearchChange: (value: string) => void;
  onPlatformChange: (value: string) => void;
}

export function SearchFilters({
  searchTerm,
  selectedPlatform,
  onSearchChange,
  onPlatformChange
}: SearchFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by username, message ID, or sender ID..."
            className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Filter className="text-gray-400" />
        <select
          className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedPlatform}
          onChange={(e) => onPlatformChange(e.target.value)}
        >
          <option value="all">All Platforms</option>
          <option value="Telegram">Telegram</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Instagram">Instagram</option>
        </select>
      </div>
    </div>
  );
}
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { FlaggedUser } from '../types';

interface DataTableProps {
  data: FlaggedUser[];
}

export function DataTable({ data }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Username</th>
            <th className="px-4 py-3">Message ID</th>
            <th className="px-4 py-3">Sender ID</th>
            <th className="px-4 py-3">Receiver ID</th>
            <th className="px-4 py-3">Platform</th>
            <th className="px-4 py-3">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700/30">
              <td className="px-4 py-3">
                {user.priorityScore >= 90 ? (
                  <div className="flex items-center text-red-500">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    {user.priorityScore}
                  </div>
                ) : (
                  <span className={user.priorityScore >= 70 ? 'text-yellow-500' : 'text-gray-400'}>
                    {user.priorityScore}
                  </span>
                )}
              </td>
              <td className="px-4 py-3">{user.username}</td>
              <td className="px-4 py-3 font-mono text-sm">{user.messageId}</td>
              <td className="px-4 py-3 font-mono text-sm">{user.senderId}</td>
              <td className="px-4 py-3 font-mono text-sm">{user.receiverId}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.platform === 'Telegram' ? 'bg-blue-500/20 text-blue-300' :
                  user.platform === 'WhatsApp' ? 'bg-green-500/20 text-green-300' :
                  'bg-pink-500/20 text-pink-300'
                }`}>
                  {user.platform}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-400">
                {new Date(user.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
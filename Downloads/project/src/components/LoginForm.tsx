import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface LoginFormProps {
  onLogin: (staffId: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(staffId, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900">
      <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl w-full max-w-md backdrop-blur-sm">
        <div className="flex flex-col items-center mb-8">
          <Shield className="w-12 h-12 text-blue-400 mb-4" />
          <h1 className="text-2xl font-bold text-white">NCB Officer Portal</h1>
          <p className="text-gray-400 mt-2">Digital Intelligence Dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              NCB Officer ID
            </label>
            <input
              type="text"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        
        <p className="mt-4 text-sm text-gray-400 text-center">
          Authorized access only. All activities are monitored and logged.
        </p>
      </div>
    </div>
  );
}
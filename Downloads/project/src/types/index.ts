export interface FlaggedUser {
  id: number;
  username: string;
  messageId: string;
  senderId: string;
  receiverId: string;
  platform: 'Telegram' | 'WhatsApp' | 'Instagram';
  priorityScore: number;
  timestamp: string;
}

export interface User {
  staffId: string;
  name: string;
  role: 'officer' | 'admin';
}
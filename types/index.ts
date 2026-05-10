export interface Letter {
  id: string;
  created_at: string;
  teacher_name: string;
  sender_name: string;
  sender_email: string;
  content: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
}
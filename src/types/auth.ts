export type Users = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null;
};

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date; // Changed from 'expires'
  userId: string;
  token: string; // Changed from 'sessionToken'
  userAgent?: string | null;
  ipAddress?: string | null; // Changed from 'ip'
};

export interface SessionWithUser {
  session: Session;
  user: Users;
}

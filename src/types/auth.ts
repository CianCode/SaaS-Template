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
  expiresAt: Date;
  userId: string;
  token: string;
  userAgent?: string | null;
  ipAddress?: string | null;
};

export interface SessionWithUser {
  session: Session;
  user: Users;
}

"use client";

import React, { useEffect, useState } from "react";

import { authClient } from "@/lib/auth-client";
import type { SessionWithUser } from "@/types/auth";

const Home = () => {
  const [session, setSession] = useState<SessionWithUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await authClient.getSession();
        setSession(data);
      } catch (error) {
        console.error("Failed to fetch session:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center text-2xl">Welcome, SaaS Template</h1>
      <div className="flex justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="text-lg">
            {session?.user
              ? `Hello, ${session.user.name}`
              : "You are not logged in"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;

import { api } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  questionAnswer: number[];
}

export const useUser = (userId?: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<User>("/users", {
        params: { userId: id },
      });
      setUser(response.data);
    } catch (err) {
      console.error("Erro ao buscar usuário:", err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [userId, fetchUser]);

  return { user, loading, error };
};
